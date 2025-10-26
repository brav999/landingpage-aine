import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { getServerSession } from "next-auth";
import { authOptions } from "~/auth.config";
import { prisma } from "~/lib/prisma";
import { logger } from "~/lib/logger";

export async function createContext(_opts: FetchCreateContextFnOptions) {
  const session = await getServerSession(authOptions);

  return {
    session,
    prisma,
    logger
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
