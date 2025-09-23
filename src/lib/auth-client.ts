import { envs } from "@/core/config"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: envs.BETTER_AUTH_URL
})