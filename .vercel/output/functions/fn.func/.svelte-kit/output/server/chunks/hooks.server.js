import { a as auth } from "./lucia.js";
const handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);
  const response = await resolve(event);
  return response;
};
export {
  handle
};
