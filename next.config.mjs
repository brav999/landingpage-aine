import { withAxiom } from "@axiomhq/next";
import { withSentryConfig } from "@sentry/nextjs";

const config = withAxiom({
  reactStrictMode: true,
  experimental: {
    authInterrupts: true,
    reactCompiler: true
  },
  typescript: {
    ignoreBuildErrors: false
  }
});

const sentryOptions = {
  silent: true,
  widenClientFileUpload: true,
  disableLogger: true
};

export default withSentryConfig(config, sentryOptions);
