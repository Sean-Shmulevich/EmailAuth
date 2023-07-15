import { g as getEmails } from "../../../../chunks/email.js";
const load = async ({ url }) => {
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
