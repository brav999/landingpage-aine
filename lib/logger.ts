import { pino } from "pino";
import { pinoAxiom } from "@axiomhq/pino";
import { env } from "~/lib/env";

let logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  transport: process.env.NODE_ENV === "production"
    ? undefined
    : {
        target: "pino-pretty",
        options: {
          colorize: true
        }
      }
});

if (process.env.NODE_ENV === "production" && env.AXIOM_TOKEN && env.AXIOM_DATASET) {
  logger = pino(
    {
      level: "info"
    },
    pinoAxiom({
      token: env.AXIOM_TOKEN,
      dataset: env.AXIOM_DATASET
    })
  );
}

export { logger };
