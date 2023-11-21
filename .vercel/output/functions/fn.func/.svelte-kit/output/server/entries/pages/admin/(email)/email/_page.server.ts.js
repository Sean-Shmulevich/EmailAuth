import { g as getEmails } from "../../../../../chunks/email.js";
import { r as redirect } from "../../../../../chunks/index.js";
const load = async ({ locals, url }) => {
  const { user } = await locals.auth.validateUser();
  if (user.isAdmin === false) {
    throw redirect(302, "/");
  }
  const emailAddressQuery = url.searchParams.get("q") ?? "";
  const emails = await getEmails(emailAddressQuery);
  return {
    emails,
    emailAddressQuery
  };
};
export {
  load
};
