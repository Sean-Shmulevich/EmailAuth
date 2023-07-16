import { a as auth, L as LuciaError } from "../../../../chunks/lucia.js";
import { e as emailRegex } from "../../../../chunks/form-submission.js";
import "../../../../chunks/debug.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (user) {
    if (!user.isBrand)
      throw redirect(302, "/login");
    if (!user.emailVerified)
      throw redirect(302, "/email-verification");
    throw redirect(302, "/");
  }
};
const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString() ?? "";
    if (email === null || !emailRegex.test(email)) {
      return fail(400, {
        message: "Incorrect email or password",
        email
      });
    }
    const password = formData.get("password");
    if (password instanceof File || password === null) {
      return fail(400, {
        message: "Incorrect email or password",
        email
      });
    }
    try {
      const key = await auth.useKey("email", email, password);
      const session = await auth.createSession(key.userId);
      locals.auth.setSession(session);
    } catch (e) {
      if (e instanceof LuciaError && e.message === "AUTH_INVALID_KEY_ID") {
        return fail(400, {
          message: "Incorrect email or password",
          email
        });
      }
      if (e instanceof LuciaError && e.message === "AUTH_INVALID_PASSWORD") {
        return fail(400, {
          message: "Incorrect email or password",
          email
        });
      }
      return fail(400, {
        message: "An unknown error occurred",
        email
      });
    }
    throw redirect(302, "/");
  }
};
export {
  actions,
  load
};
