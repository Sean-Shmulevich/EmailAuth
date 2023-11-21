import { p as prismaClient } from "../../../../../chunks/db.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { a as auth } from "../../../../../chunks/lucia.js";
import "../../../../../chunks/email.js";
async function getUserProfile(userId) {
  const profile = await prismaClient.brandProfile.findUnique({
    where: {
      user_id: userId
    }
  });
  if (!profile) {
    return false;
  }
  return profile;
}
const load = async ({ params, locals }) => {
  const { user } = await locals.auth.validateUser();
  const paramUserId = params.user;
  if (!user || user.userId !== paramUserId || !user.emailVerified) {
    throw redirect(302, "/");
  }
  const objects = await prismaClient.object.findMany({
    where: {
      userId: user.userId
    },
    orderBy: {
      image_number: "asc"
    }
  });
  const currUserProfile = await getUserProfile(paramUserId);
  return {
    currUserProfile: currUserProfile || null,
    objects
  };
};
const actions = {
  // default: async ({ request, locals }) => {
  // }
  update: async ({ request, locals }) => {
    const { user } = await locals.auth.validateUser();
    let userId = user.userId;
    const formData = await request.formData();
    let size = formData.get("size")?.toString();
    let bio = formData.get("bio")?.toString();
    let goals = formData.get("goals")?.toString();
    let socialMediaLinks = formData.get("social-media")?.toString();
    if (!user)
      throw new Error("User not found");
    let missingFields = [];
    if (!size)
      missingFields.push("size");
    if (!bio)
      missingFields.push("bio");
    if (!goals)
      missingFields.push("goals");
    if (!socialMediaLinks)
      missingFields.push("add at least one social media link");
    if (missingFields.length) {
      return {
        message: `Please fill out the following fields: ${missingFields.join(", ")}`,
        user: { size, bio, goals }
      };
    }
    await prismaClient.brandProfile.update({
      where: { user_id: userId },
      data: {
        size,
        bio,
        goals,
        user_id: userId,
        socialMediaLinks: JSON.parse(socialMediaLinks)
      }
    });
    return {
      message: "Profile updated successfully",
      user: { size, bio, goals }
    };
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
