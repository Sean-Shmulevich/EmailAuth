import { j as json } from "../../../../chunks/index.js";
import { p as prismaClient } from "../../../../chunks/debug.js";
import "../../../../chunks/lucia.js";
async function GET({ locals }) {
  const { user } = await locals.auth.validateUser();
  const nextDeals = await prismaClient.deal.findMany({
    take: 5,
    where: {
      NOT: {
        userDealStatus: {
          some: {
            userId: user.userId
          }
        }
      }
    }
  });
  if (!nextDeals) {
    return json("no deals found");
  }
  return json("hello world");
}
async function POST({ request, locals }) {
  const { user } = await locals.auth.validateUser();
  let userSwipeData = await request.json();
  for (let i = 0; i < userSwipeData.length; i++) {
    await prismaClient.userDealStatus.create({
      data: {
        userId: user.userId,
        dealId: userSwipeData[i].dealId,
        status: userSwipeData[i].decision
      }
    });
  }
  const nextDeals = await prismaClient.deal.findMany({
    take: 5,
    where: {
      NOT: {
        userDealStatus: {
          some: {
            userId: user.userId
          }
        }
      }
    }
  });
  return json(nextDeals);
}
export {
  GET,
  POST
};
