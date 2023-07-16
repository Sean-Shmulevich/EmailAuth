import { b as sendEmailVerificationEmail } from "../../../../chunks/email.js";
import { e as emailVerificationToken } from "../../../../chunks/lucia.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) {
    throw redirect(302, "/login");
  }
  if (user.emailVerified) {
    throw redirect(302, "/");
  }
  return {
    user
  };
};
const actions = {
  default: async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    if (!user || user.emailVerified) {
      return fail(401, {
        message: "Unauthorized"
      });
    }
    try {
      const token = await emailVerificationToken.issue(user.userId);
      await sendEmailVerificationEmail(user.email, token.toString());
    } catch (e) {
      console.log(e);
      return fail(500, {
        message: "An unknown error occurred"
      });
    }
  }
};
export {
  actions,
  load
};
