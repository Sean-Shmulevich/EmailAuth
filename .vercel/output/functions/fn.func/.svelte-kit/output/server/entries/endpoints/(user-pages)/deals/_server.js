import { j as json } from "../../../../chunks/index.js";
import { p as prismaClient } from "../../../../chunks/db.js";
import "../../../../chunks/lucia.js";
async function GET({ locals }) {
  const { user } = await locals.auth.validateUser();
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
  return json(nextDeals);
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
  return json("suceess");
}
export {
  GET,
  POST
};
