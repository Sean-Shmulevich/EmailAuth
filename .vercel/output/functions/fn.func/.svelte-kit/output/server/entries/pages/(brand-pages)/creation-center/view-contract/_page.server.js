import { p as prismaClient } from "../../../../../chunks/db.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { a as auth } from "../../../../../chunks/lucia.js";
const load = async ({ params, locals, url }) => {
  const { user } = await locals.auth.validateUser();
  const athleteId = url.searchParams.get("user");
  const dealId = url.searchParams.get("deal");
  if (!user || !user.emailVerified || !user.adminVerified) {
    throw redirect(302, "/");
  }
  const deal = await prismaClient.deal.findUnique({
    where: {
      id: dealId
    },
    include: {
      userDealStatus: {
        where: {
          userId: athleteId
        },
        include: {
          user: {
            include: {
              profile: true
              // Include the profile
            }
          },
          contract: true
        }
      }
    }
  });
  if (!deal) {
    throw redirect(302, "/");
  }
  return {
    deal
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
