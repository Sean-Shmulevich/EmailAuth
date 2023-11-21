import { p as prismaClient } from "../../../../../../chunks/db.js";
import { s as sendEmail } from "../../../../../../chunks/email.js";
import { r as redirect, f as fail } from "../../../../../../chunks/index.js";
import { a as auth } from "../../../../../../chunks/lucia.js";
let deal;
const load = async ({ params, locals }) => {
  const { user } = await locals.auth.validateUser();
  const paramDealId = params.deal;
  if (!user || user.emailVerified === false || user.adminVerified === false || user.isBrand === false) {
    throw redirect(302, "/");
  }
  deal = await prismaClient.deal.findUnique({
    where: { id: paramDealId }
  });
  const interestedUsersData = await prismaClient.userDealStatus.findMany({
    where: {
      dealId: paramDealId,
      status: "pending"
    },
    include: {
      user: {
        include: {
          profile: true
        }
      }
    }
  });
  const confirmedUserData = await prismaClient.userDealStatus.findMany({
    where: {
      dealId: paramDealId,
      status: "brand-accepted"
    },
    include: {
      user: true
    }
  });
  const readyUserData = await prismaClient.userDealStatus.findMany({
    where: {
      dealId: paramDealId,
      status: "user-accepted"
    },
    include: {
      user: true
    }
  });
  const brandFinalizedData = await prismaClient.userDealStatus.findMany({
    where: {
      dealId: paramDealId,
      status: "brand-finalized"
    },
    include: {
      user: true
    }
  });
  const completedData = await prismaClient.userDealStatus.findMany({
    where: {
      dealId: paramDealId,
      status: "auth-completed"
    },
    include: {
      user: true
    }
  });
  const dealImage = await prismaClient.dealImages.findFirst({
    where: {
      dealId: paramDealId
    }
  });
  const interestedUsers = interestedUsersData.map((userData) => userData.user);
  const confirmedUsers = confirmedUserData.map((userData) => userData.user);
  const readyUsers = readyUserData.map((userData) => userData.user);
  const brandFinalized = brandFinalizedData.map((userData) => userData.user);
  const completed = completedData.map((userData) => userData.user);
  return {
    deal,
    interestedUsers,
    confirmedUsers,
    readyUsers,
    brandFinalized,
    completed,
    dealImage
  };
};
const actions = {
  pickUser: async ({ params, request, locals, url }) => {
    const { user } = await locals.auth.validateUser();
    const data = await request.formData();
    const userToApprove = data.get("userId")?.toString();
    const userEmail = data.get("user-email")?.toString();
    const paramDealId = params.deal;
    if (!user || user.isBrand === false) {
      throw redirect(302, "/");
    }
    const dealStatus = await prismaClient.userDealStatus.update({
      where: {
        userId_dealId: {
          dealId: paramDealId,
          userId: userToApprove
        }
      },
      data: {
        status: "brand-accepted"
      }
    });
    sendEmail(
      userEmail,
      url.origin,
      "A brand is interested in working with you!",
      `Deal info title: ${deal.title} 
 Description: ${deal.shortDescription}`
    );
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
