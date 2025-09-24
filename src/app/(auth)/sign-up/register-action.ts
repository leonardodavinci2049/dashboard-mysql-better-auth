"use server";

import { auth } from "@/lib/auth";
import {
  validateRegisterData,
  errorMessages,
  type RegisterFormData,
} from "../_common-validations/validation";

// Definir o tipo do estado
type RegisterState = {
  message: string;
  success: boolean;
  fieldErrors?: Record<string, string>;
} | null;

async function registerAction(
  _prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const entries = Array.from(formData.entries());
  const rawData = Object.fromEntries(entries);

  // Validação com Zod
  const validationResult = validateRegisterData(rawData);

  if (!validationResult.success) {
    return {
      message: "Por favor, corrija os erros abaixo:",
      success: false,
      fieldErrors: validationResult.errors || {},
    };
  }

  const data = validationResult.data as RegisterFormData;

  try {
    // Verificação de duplicidade no banco de dados
    const existingUser = {};
    /*     const existingUser = await cnxDataBase.user.findFirst({
      where: {
        email: data.email,
      },
    }); */

    if (existingUser) {
      return {
        message: errorMessages.emailExists,
        success: false,
      };
    }

    // Criar usuário usando BetterAuth
    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });

    return {
      message: errorMessages.registerSuccess,
      success: true,
    };
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return {
      message: errorMessages.serverError,
      success: false,
    };
  }
}

export default registerAction;
