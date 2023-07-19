import { e as emailRegex } from "../../../../chunks/form-submission.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { a as auth, e as emailVerificationToken, L as LuciaError } from "../../../../chunks/lucia.js";
import { s as sendEmailVerificationEmail } from "../../../../chunks/email.js";
import { p as prismaClient } from "../../../../chunks/debug.js";
import { Prisma } from "@prisma/client";
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
    const email = formData.get("email")?.toString() ?? "";
    if (email === null || !emailRegex.test(email)) {
      return fail(400, {
        message: "Invalid email",
        email
      });
    }
    const password = formData.get("password");
    if (password instanceof File || password === null || password.length < 8) {
      return fail(400, {
        message: "Invalid password",
        email
      });
    }
    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: "email",
          providerUserId: email,
          password
        },
        attributes: {
          email,
          email_verified: false,
          admin_verified: false,
          is_admin: false,
          is_brand: true
        }
      });
      const session = await auth.createSession(user.userId);
      locals.auth.setSession(session);
      await prismaClient.brandProfile.create({
        data: {
          user_id: user.userId,
          name: formData.get("name")?.toString() ?? "",
          location: formData.get("location")?.toString() ?? "",
          industry: formData.get("industry")?.toString() ?? "",
          size: formData.get("size")?.toString() ?? "",
          goals: "",
          socialMediaLinks: "",
          bio: ""
        }
      });
      const token = await emailVerificationToken.issue(user.userId);
      await sendEmailVerificationEmail(user.email, token.toString());
    } catch (e) {
      if (e instanceof LuciaError && e.message === "AUTH_DUPLICATE_KEY_ID") {
        return fail(400, {
          message: "Email is already taken",
          email
        });
      }
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        return fail(400, {
          message: "Email is already taken",
          email
        });
      }
      return fail(500, {
        message: "An unknown error occurred",
        email
      });
    }
  }
};
export {
  actions,
  load
};
