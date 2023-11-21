import "../../../../chunks/email.js";
import { p as prismaClient } from "../../../../chunks/db.js";
import { a as auth } from "../../../../chunks/lucia.js";
import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ locals, url }) => {
  const { user } = await locals.auth.validateUser();
  if (!user || !user.emailVerified || !user.adminVerified || user.isBrand) {
    throw redirect(302, "/");
  }
  const nextDeals = await prismaClient.deal.findMany({
    take: 5,
    where: {
      active: "active",
      NOT: {
        userDealStatus: {
          some: {
            userId: user.userId
          }
        }
      }
    },
    include: {
      dealImages: true
    }
  });
  return { nextDeals };
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
