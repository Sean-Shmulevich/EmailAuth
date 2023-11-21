import { e as emailRegex } from "../../../../chunks/form-submission.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { a as auth, L as LuciaError } from "../../../../chunks/lucia.js";
import "../../../../chunks/debug.js";
import { Prisma } from "@prisma/client";
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
  default: async ({ request, locals, url }) => {
    const formData = await request.formData();
    console.log(formData);
    const email = (formData.get("email")?.toString() ?? "").toLowerCase() ?? "";
    const name = formData.get("name")?.toString() ?? "";
    const uni = formData.get("university")?.toString() ?? "";
    const sport = formData.get("sport-preference")?.toString() ?? "";
    const gender = formData.get("gender-preference")?.toString() ?? "";
    const tos = formData.get("terms-of-service")?.toString() ?? "";
    const missingFields = [];
    if (!email)
      missingFields.push("email");
    if (!name)
      missingFields.push("name");
    if (!tos)
      missingFields.push("Agree to our terms of service");
    if (!uni)
      missingFields.push("university");
    if (!sport)
      missingFields.push("sport-preference");
    if (!gender)
      missingFields.push("gender-preference");
    if (missingFields.length > 0) {
      return fail(400, {
        message: `Missing fields: ${missingFields.join(", ")}`,
        email,
        name,
        uni,
        sport,
        gender
      });
    }
    if (email === null || !emailRegex.test(email)) {
      return fail(400, {
        message: "Invalid email",
        email,
        name,
        uni,
        sport,
        gender
      });
    }
    const password = formData.get("password");
    if (password instanceof File || password === null || password.length < 8) {
      return fail(400, {
        message: "Invalid password",
        email,
        name,
        uni,
        sport,
        gender
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
          name,
          email_verified: false,
          admin_verified: false,
          is_admin: false,
          is_brand: false
        }
      });
      await prismaClient.profile.create({
        data: {
          sport,
          college: uni,
          bio: "",
          user_id: user.userId,
          gender
        }
      });
      const session = await auth.createSession(user.userId);
      locals.auth.setSession(session);
    } catch (e) {
      if (e instanceof LuciaError && e.message === "AUTH_DUPLICATE_KEY_ID") {
        return fail(400, {
          message: "Email is already taken",
          email,
          name,
          uni,
          sport,
          gender
        });
      }
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        return fail(400, {
          message: "Email is already taken",
          email,
          name,
          uni,
          sport,
          gender
        });
      }
      return fail(500, {
        message: "An unknown error occurred",
        email,
        name,
        uni,
        sport,
        gender
      });
    }
  }
};
export {
  actions,
  load
};
