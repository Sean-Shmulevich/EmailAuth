import { a as auth } from "../../../../chunks/lucia.js";
import { p as prismaClient } from "../../../../chunks/db.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user || !user.emailVerified || !user.adminVerified || user.isBrand) {
    throw redirect(302, "/");
  }
  const newDealStatus = await prismaClient.userDealStatus.findMany({
    where: {
      userId: user.userId,
      status: "brand-accepted"
    },
    include: {
      deal: {
        include: {
          dealImages: true,
          authUser: true
        }
      }
    }
  });
  const ongoingDealStatus = await prismaClient.userDealStatus.findMany({
    where: {
      userId: user.userId,
      status: "user-accepted"
    },
    include: {
      deal: {
        include: {
          dealImages: true,
          authUser: true
        }
      }
    }
  });
  const contractSubmitted = await prismaClient.userDealStatus.findMany({
    where: {
      userId: user.userId,
      status: "brand-finalized"
    },
    include: {
      deal: {
        include: {
          dealImages: true,
          authUser: true
        }
      }
    }
  });
  const completedDealStatus = await prismaClient.userDealStatus.findMany({
    // TODO should be auth-completed
    where: {
      userId: user.userId,
      status: "auth-completed"
    },
    include: {
      deal: {
        include: {
          dealImages: true,
          authUser: true
        }
      }
    }
  });
  const newDealProfiles = newDealStatus.map((status) => status.deal);
  const ongoingDealProfiles = ongoingDealStatus.map((status) => status.deal);
  const completedDealProfiles = completedDealStatus.map((status) => status.deal);
  const contractFinalized = contractSubmitted.map((status) => status.deal);
  return {
    newDealProfiles,
    ongoingDealProfiles,
    contractFinalized,
    completedDealProfiles,
    userId: user.userId
  };
};
const actions = {
  agree: async ({ params, request, locals }) => {
    const { user } = await locals.auth.validateUser();
    const data = await request.formData();
    const dealId = data.get("agree-deal")?.toString();
    if (!user || user.isBrand || !user.emailVerified || !user.adminVerified) {
      throw redirect(302, "/");
    }
    const dealStatus = await prismaClient.userDealStatus.update({
      where: {
        userId_dealId: {
          dealId,
          userId: user.userId
        }
      },
      data: {
        status: "user-accepted"
      }
    });
    if (!dealStatus) {
      throw fail(400, { msg: "User not found" });
    }
    return {
      status: "ok"
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
