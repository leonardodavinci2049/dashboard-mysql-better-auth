"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Definir o tipo do estado
type RegisterState = {
  message: string;
  success: boolean;
} | null;



const loginAction = async (
  _prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> => {

  
  try {
        await auth.api.signInEmail({
            body: {
                email: "test@teste.com",
                password: "password123",
            }
        })

        return {
            success: true,
            message: "Signed in successfully."
        }

  } catch (error) {
      if (isRedirectError(error)){
      throw error;
    }

    if (
      typeof error === "object" &&
      error !== null &&
      "type" in error &&
      (error as { type?: string }).type === "CredentialsSignIn"
    ) {
      return { success: false, message: "Credenciais incorretas!" };
    }

    console.log(error)
    return { success: false, message: "Oops, algum erro aconteceu!" };   

  }
};

export default loginAction;
