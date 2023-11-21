import { r as redirect } from "../../chunks/index.js";
import { a as auth } from "../../chunks/lucia.js";
import "../../chunks/db.js";
import { s as sendEmail } from "../../chunks/email.js";
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) {
    return { msg: "not authenticated", user: null };
  }
  if (user.isAdmin) {
    throw redirect(302, "/admin/approve-users");
  }
  if (!user.emailVerified) {
    throw redirect(302, "/email-verification");
  }
  if (!user.adminVerified) {
    return {
      msg: "email authenticated",
      user
    };
  }
  return {
    msg: "fully authenticated",
    user
  };
};
const actions = {
  logout: async ({ locals, url }) => {
    const session = await locals.auth.validate();
    if (!session)
      return null;
    await auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null);
  },
  contactForm: async ({ request, url }) => {
    const formData = await request.formData();
    console.log(JSON.stringify(formData));
    const email = (formData.get("email")?.toString() ?? "").toLowerCase();
    const subject = formData.get("subject")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";
    sendEmail("info@dapup.co", url.origin, `Request from ${email}, Subject: ${subject}`, message);
  }
};
export {
  actions,
  load
};
