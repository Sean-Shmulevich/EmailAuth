import { p as prismaClient } from "../../chunks/db.js";
const load = async ({ locals, url }) => {
  const { user } = await locals.auth.validateUser();
  let profilePicture = `https://slimecars.com/assets/dapupprofile.png`;
  if (!user || !user.emailVerified) {
    return { msg: "not authenticated", user: null };
  }
  const profilePictureData = await prismaClient.object.findFirst({
    where: {
      userId: user.userId,
      image_number: 0
    }
  });
  if (profilePictureData && profilePictureData.id) {
    profilePicture = `/api/s3object/${profilePictureData.id}`;
  }
  if (!user.adminVerified) {
    return {
      msg: "email authenticated",
      profilePicture,
      // !!! returning user might be dangerous
      user
    };
  }
  return {
    msg: "fully authenticated",
    profilePicture,
    user
  };
};
export {
  load
};
