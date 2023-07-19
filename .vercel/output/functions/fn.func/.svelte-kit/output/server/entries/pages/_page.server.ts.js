import { r as redirect } from "../../chunks/index.js";
import { a as auth } from "../../chunks/lucia.js";
import "../../chunks/debug.js";
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
  logout: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session)
      return null;
    await auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null);
  }
};
export {
  actions,
  load
};
