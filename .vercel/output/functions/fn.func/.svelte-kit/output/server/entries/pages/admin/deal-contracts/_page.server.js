import { p as prismaClient } from "../../../../chunks/db.js";
import "../../../../chunks/email.js";
import { r as redirect } from "../../../../chunks/index.js";
import { a as auth } from "../../../../chunks/lucia.js";
const load = async ({ params, locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user || !user.isAdmin) {
    throw redirect(302, "/");
  }
  const dealsWithContracts = await prismaClient.deal.findMany({
    where: {
      userDealStatus: {
        some: {
          contractId: {
            not: null
          }
        }
      }
    },
    include: {
      dealImages: true,
      authUser: true,
      userDealStatus: {
        include: {
          contract: true,
          user: {
            include: {
              profile: true
            }
          }
        }
      }
    }
  });
  console.log("helloooo", dealsWithContracts);
  if (dealsWithContracts.length === 0) {
    return {
      status: "no active contracts"
    };
  }
  return {
    deal: dealsWithContracts
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
