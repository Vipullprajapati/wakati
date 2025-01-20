import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";
import logger from "../middleware/logger";
import { cloudflareRateLimiter } from "@hono-rate-limiter/cloudflare";
type AppType = {
  Variables: {
    rateLimit: boolean;
  };
  Bindings: {
    MY_RATE_LIMITER: RateLimit;
  };
};
export function createRouter() {
  type AppType = {
    Variables: {
      rateLimit: boolean;
    };
    Bindings: {
      MY_RATE_LIMITER: RateLimit;
    };
  };
  return new OpenAPIHono<AppType>({ strict: false });
}

export default function createApp() {
  const app = createRouter();
  app.use(logger());
  app.notFound(notFound);
  app.onError(onError);
  app.use(
    cloudflareRateLimiter<AppType>({
      rateLimitBinding: (c) => c.env.MY_RATE_LIMITER,
      keyGenerator: (c) => c.req.header("cf-connecting-ip") ?? "", // Method to generate custom identifiers for clients.
      message: {
        message: "Too many requests, please hold on a bit",
      },
    })
  );
  return app;
}
