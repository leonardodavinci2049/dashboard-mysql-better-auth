"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import {
  validateLoginData,
  errorMessages,
} from "../_common-validations/validation";

// Definir o tipo do estado do formulário
type LoginState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
} | null;

/**
 * Server Action para autenticação com email/senha
 */
export const loginAction = async (
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> => {
  try {
    // Extrair dados do FormData
    const rawData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Validar dados com Zod
    const validationResult = validateLoginData(rawData);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Dados inválidos. Verifique os campos e tente novamente.",
        errors: validationResult.errors || {},
      };
    }

    // Garantir que os dados validados existem
    if (!validationResult.data) {
      return {
        success: false,
        message: "Erro na validação dos dados.",
      };
    }

    const { email, password } = validationResult.data;

    // Autenticar com Better-Auth
    await auth.api.signInEmail({
      body: { email, password },
    });

    // Se chegou até aqui, o login foi bem-sucedido
    // O redirect será tratado pelo middleware ou pela configuração do Better-Auth
    redirect("/dashboard");
  } catch (error) {
    // Tratar erro de redirect (este é esperado após login bem-sucedido)
    if (isRedirectError(error)) {
      throw error;
    }

    console.error("Login error:", error);

    // Tratar erros específicos do Better-Auth
    if (typeof error === "object" && error !== null && "message" in error) {
      const errorMessage = (error as { message?: string }).message || "";

      if (errorMessage.includes("Invalid email or password")) {
        return {
          success: false,
          message: errorMessages.invalidCredentials,
        };
      }

      if (errorMessage.includes("Account disabled")) {
        return {
          success: false,
          message: errorMessages.accountDisabled,
        };
      }
    }

    // Erro genérico
    return {
      success: false,
      message: errorMessages.serverError,
    };
  }
};

/**
 * Server Action para autenticação com Google OAuth
 */
export const loginGoogleAction = async (): Promise<LoginState> => {
  try {
    await auth.api.signInSocial({
      body: {
        provider: "google",
        callbackURL: "/dashboard",
      },
    });

    // Para OAuth, normalmente há um redirect automático
    return {
      success: true,
      message: "Redirecionando para Google...",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    console.error("Google login error:", error);

    return {
      success: false,
      message: "Erro ao conectar com Google. Tente novamente.",
    };
  }
};

export default loginAction;
