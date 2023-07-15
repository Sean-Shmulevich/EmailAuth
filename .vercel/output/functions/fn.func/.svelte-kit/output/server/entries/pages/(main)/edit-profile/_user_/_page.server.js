import { p as prismaClient } from "../../../../../chunks/debug.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { a as auth } from "../../../../../chunks/lucia.js";
import "../../../../../chunks/email.js";
async function getUserProfile(userId) {
  const profile = await prismaClient.profile.findUnique({
    where: {
      user_id: userId
    }
  });
  return profile;
}
const load = async ({ params, locals }) => {
  const { user } = await locals.auth.validateUser();
  const objects = await prismaClient.object.findMany({
    where: {
      userId: user.userId
    },
    orderBy: {
      image_number: "asc"
    }
  });
  const paramUserId = params.user;
  if (!user || user.userId !== paramUserId) {
    throw redirect(302, "/");
  }
  const currUserProfile = await getUserProfile(paramUserId);
  return {
    currUserProfile,
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
    let name = formData.get("name");
    let sport = formData.get("sport");
    let college = formData.get("college");
    let year = formData.get("year");
    let bio = formData.get("bio");
    if (!user)
      throw new Error("User not found");
    let missingFields = [];
    if (!name)
      missingFields.push("name");
    if (!sport)
      missingFields.push("sport");
    if (!college)
      missingFields.push("college");
    if (!year)
      missingFields.push("year");
    if (!bio)
      missingFields.push("bio");
    if (missingFields.length) {
      return {
        message: `Please fill out the following fields: ${missingFields.join(", ")}`,
        user: { name, sport, college, year, bio }
      };
    }
    await prismaClient.profile.upsert({
      where: { user_id: userId },
      create: {
        name,
        sport,
        college,
        year,
        bio,
        user_id: userId
      },
      update: {
        name,
        sport,
        college,
        year,
        bio
      }
    });
    return {
      message: "Profile updated successfully",
      user: { name, sport, college, year, bio }
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
