import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "~/lib/prisma";
import { env } from "~/lib/env";

const providers: NextAuthConfig["providers"] = [
  EmailProvider({
    sendVerificationRequest() {
      // O envio real deve ser implementado com o provedor de e-mail oficial em produção.
      throw new Error("Implementar envio de e-mail transacional (Resend, Supabase ou SES).");
    }
  })
];

if (env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) {
  providers.unshift(
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    })
  );
}

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers,
  session: {
    strategy: "jwt"
  },
  secret: env.NEXTAUTH_SECRET
};
