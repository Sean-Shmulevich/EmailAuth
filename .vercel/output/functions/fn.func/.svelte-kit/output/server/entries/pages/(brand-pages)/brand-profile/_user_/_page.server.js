import { p as prismaClient } from "../../../../../chunks/debug.js";
import "../../../../../chunks/index.js";
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
  await locals.auth.validateUser();
  const paramUserId = params.user;
  const objects = await prismaClient.object.findMany({
    where: {
      userId: paramUserId
    },
    orderBy: {
      image_number: "asc"
    }
  });
  const currUserProfile = await getUserProfile(paramUserId);
  return {
    currUserProfile: currUserProfile || null,
    objects: objects || null
  };
};
const actions = {
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
