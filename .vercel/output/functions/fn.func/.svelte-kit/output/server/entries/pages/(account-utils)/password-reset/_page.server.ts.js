import { a as sendPasswordResetEmail } from "../../../../chunks/email.js";
import { a as auth, p as passwordResetToken } from "../../../../chunks/lucia.js";
import { p as prismaClient } from "../../../../chunks/debug.js";
import { e as emailRegex } from "../../../../chunks/form-submission.js";
import { f as fail } from "../../../../chunks/index.js";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString() ?? "";
    if (email === null || !emailRegex.test(email)) {
      return fail(400, {
        message: "Invalid email",
        email
      });
    }
    try {
      const databaseUser = await prismaClient.authUser.findFirst({
        where: {
          email
        }
      });
      if (!databaseUser) {
        return fail(400, {
          message: "Email does not exist",
          email
        });
      }
      const user = auth.transformDatabaseUser(databaseUser);
      const token = await passwordResetToken.issue(user.userId);
      await sendPasswordResetEmail(user.email, token.toString());
      return {
        success: true
      };
    } catch (e) {
      console.log(e);
      return fail(500, {
        message: "An unknown error occurred",
        email
      });
    }
  }
};
export {
  actions
};
