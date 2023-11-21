import { a as auth, L as LuciaError } from "../../../../chunks/lucia.js";
import { e as emailRegex } from "../../../../chunks/form-submission.js";
import "../../../../chunks/debug.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { p as prismaClient } from "../../../../chunks/db.js";
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (user) {
    if (!user.emailVerified)
      throw redirect(302, "/email-verification");
    throw redirect(302, "/");
  }
};
const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = (formData.get("email")?.toString() ?? "").toLowerCase();
    const user = await prismaClient.authUser.findUnique({
      where: {
        email
      }
    });
    if (!user || user.is_brand || user.is_admin) {
      return fail(400, {
        message: "wrong login try another one",
        email
      });
    }
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
      console.log(e);
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
