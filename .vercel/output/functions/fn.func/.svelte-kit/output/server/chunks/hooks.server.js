import { a as auth } from "./lucia.js";
import "@vercel/edge";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(5, "10 s")
});
const handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);
  const response = await resolve(event);
  return response;
};
export {
  handle
};
