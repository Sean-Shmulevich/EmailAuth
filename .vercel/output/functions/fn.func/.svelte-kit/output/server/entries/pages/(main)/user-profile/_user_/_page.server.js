import { p as prismaClient } from "../../../../../chunks/debug.js";
import { r as redirect } from "../../../../../chunks/index.js";
import "../../../../../chunks/lucia.js";
import "../../../../../chunks/email.js";
async function getUserProfile(userId) {
  const profile = await prismaClient.profile.findUnique({
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
  if (!user) {
    throw redirect(302, "/");
  }
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
export {
  load
};
