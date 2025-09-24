import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "@/lib/auth";
import { nextCookies } from "better-auth/next-js";
import { envs } from "@/core/config";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>(), nextCookies()],
  /** The base URL of the server (required para OAuth funcionar corretamente) */
  baseURL: envs.BETTER_AUTH_URL,
});
