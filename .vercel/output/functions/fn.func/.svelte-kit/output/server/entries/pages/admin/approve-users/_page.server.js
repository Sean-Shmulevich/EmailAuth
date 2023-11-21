import { p as prismaClient } from "../../../../chunks/db.js";
import { Prisma } from "@prisma/client";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { a as auth } from "../../../../chunks/lucia.js";
import { s as sendEmail } from "../../../../chunks/email.js";
async function getAllUsers() {
  const users = await prismaClient.authUser.findMany({
    where: {
      is_admin: false,
      is_brand: false,
      email_verified: true,
      admin_verified: false
    }
  });
  return users;
}
async function getApprovedUsers() {
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
  const allUsers = getAllUsers();
  const approvedUsers = getApprovedUsers();
  return {
    allUsers,
    approvedUsers
  };
};
async function verifyUser(email, url) {
  const updatedUser = await prismaClient.authUser.update({
    where: {
      email
    },
    data: {
      admin_verified: true
    }
  });
  sendEmail(
    email,
    url,
    "Congratulations! Your DapUp Account is Verified and Approved!",
    `We are thrilled to inform you that your DapUp account has been successfully verified and approved!<br/><br/>
		Welcome to the DapUp community where college athletes and brands create winning partnerships.<br/>
		You can now explore exclusive deals, connect with brands, and DapUp Your Game!<br/><br/>
		Best regards,<br/>
		DapUp Team`
  );
  return updatedUser;
}
const actions = {
  verify: async ({ request, locals, url }) => {
    const formData = await request.formData();
    const email = (formData.get("email")?.toString() ?? "").toLowerCase();
    if (email === null) {
      console.log("email is null or not valid");
      return fail(400, {
        message: "email is null or not valid",
        email
      });
    }
    try {
      verifyUser(email, url.origin);
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
