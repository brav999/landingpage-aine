import { z } from "zod";
import { publicProcedure, router } from "~/server/api/trpc";
import { env } from "~/lib/env";

export const healthRouter = router({
  status: publicProcedure.input(z.void()).query(() => {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      supabaseUrl: env.SUPABASE_URL
    };
  })
});
