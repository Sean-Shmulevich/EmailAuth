import { p as prismaClient } from "../../../../../chunks/db.js";
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
    console.log(formData);
    let industries = formData.get("industries")?.toString() ?? "[]";
    let bio = formData.get("bio")?.toString();
    let socialMedia = formData.get("social-media");
    let venmo = formData.get("venmo")?.toString();
    let goal = formData.get("goal")?.toString();
    let hometown = formData.get("hometown")?.toString();
    let phoneNumber = formData.get("phoneNumber")?.toString() ?? "";
    let graduation = formData.get("graduation")?.toString();
    if (goal && goal === "custom") {
      goal = formData.get("goal-custom")?.toString();
    }
    if (!user)
      throw new Error("User not found");
    let missingFields = [];
    if (!venmo)
      missingFields.push("venmo");
    if (!bio)
      missingFields.push("bio");
    if (!socialMedia)
      missingFields.push("Social media");
    if (!hometown)
      missingFields.push("hometown");
    if (!graduation)
      missingFields.push("graduation year");
    if (!goal)
      missingFields.push("goal");
    if (missingFields.length > 0) {
      return {
        message: `Please fill out the following fields: ${missingFields.join(", ")}`
      };
    }
    let media = JSON.parse(socialMedia);
    for (let platform in media) {
      if (!media[platform].startsWith("http://") && !media[platform].startsWith("https://")) {
        media[platform] = "https://" + media[platform];
      }
    }
    await prismaClient.profile.update({
      where: { user_id: userId },
      data: {
        venmo,
        socialMedia: media,
        industries: JSON.parse(industries),
        goal,
        hometown,
        phoneNumber,
        year: graduation,
        bio
      }
    });
    return {
      message: "Profile updated successfully"
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
