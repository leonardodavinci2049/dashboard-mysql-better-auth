import prisma from "@/lib/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { envs } from "@/core/config";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  emailAndPassword: {
    enabled: true,
    trustedOrigins: [envs.BETTER_AUTH_URL],
  },

  plugins: [nextCookies()],
});
