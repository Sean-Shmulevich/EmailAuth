import { p as prismaClient } from "../../../../chunks/debug.js";
import { Prisma } from "@prisma/client";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { a as auth } from "../../../../chunks/lucia.js";
import { c as sendEmail } from "../../../../chunks/email.js";
async function getAllBrands() {
  const brands = await prismaClient.authUser.findMany({
    where: {
      is_admin: false,
      is_brand: true,
      email_verified: true,
      admin_verified: false
    }
  });
  return brands;
}
async function getApprovedBrands() {
  const users = await prismaClient.authUser.findMany({
    where: {
      is_admin: false,
      is_brand: false,
      email_verified: true,
      admin_verified: true
    }
  });
  return users;
}
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user || !user.isAdmin) {
    throw redirect(302, "/");
  }
  const allBrands = await getAllBrands();
  const approvedBrands = getApprovedBrands();
  return {
    allBrands,
    approvedBrands
  };
};
async function verifyUser(email) {
  const updatedUser = await prismaClient.authUser.update({
    where: {
      email
    },
    data: {
      admin_verified: true
    }
  });
  sendEmail(email, "Your account has been verified", "Your account has been verified by the admin. You can now login to your account.");
  return updatedUser;
}
const actions = {
  verify: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString() ?? "";
    if (email === null) {
      console.log("email is null or not valid");
    }
    try {
      verifyUser(email);
    } catch (e) {
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
  },
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
