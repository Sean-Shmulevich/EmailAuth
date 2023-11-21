import { p as prismaClient } from "../../../../../chunks/db.js";
import { r as redirect } from "../../../../../chunks/index.js";
const load = async ({ url, locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
    throw redirect(302, "/");
  }
  if (url.searchParams.get("dealId")) {
    const deal = await prismaClient.deal.findFirst({
      where: {
        id: url.searchParams.get("dealId"),
        active: "pending"
      },
      include: {
        dealImages: true
      }
    });
    if (!deal) {
      throw redirect(302, `/suggest/${url.searchParams.get("dealId")}?sportPref=null`);
    }
    return {
      deal
    };
  }
};
const actions = {
  makeDeal: async ({ url, request, locals }) => {
    const { user } = await locals.auth.validateUser();
    const formData = await request.formData();
    let publish = "pending";
    if (formData.get("deal-submit") && formData.get("deal-submit").toString() === "publish") {
      publish = "active";
    }
    let eventType = formData.get("event-type")?.toString() ?? "";
    let endDate = null;
    if (formData.get("end-date")) {
      endDate = new Date(formData.get("end-date")?.toString());
    }
    const requiredFields = [
      "deal-title",
      "short-description",
      // 'event-type',
      "sport-preference",
      "gender-preference",
      "in-person-or-virtual",
      "event-date",
      "estimated-payment",
      // 'number-of-athletes',
      "single-or-multiple",
      "is-campaign"
    ];
    if (publish === "active") {
      for (const field of requiredFields) {
        if (!formData.get(field)) {
          console.log("field" + field);
        }
      }
    }
    const companyName = await prismaClient.brandProfile.findFirst({
      where: {
        user_id: user.userId
      }
    });
    const data = {
      title: formData.get("deal-title")?.toString() ?? "",
      active: publish,
      shortDescription: formData.get("short-description")?.toString() ?? "",
      eventType,
      brandName: companyName?.name ?? "",
      sportPreference: formData.get("sport-preference")?.toString() ?? "",
      genderPreference: formData.get("gender-preference")?.toString() ?? "",
      location: formData.get("deal-location")?.toString() ?? "",
      inPersonOrVirtual: formData.get("in-person-or-virtual")?.toString() ?? "",
      endDate,
      eventDate: new Date(formData.get("event-date")?.toString()),
      // goals: {
      // 	set: allGoals
      // },
      estimatedPayment: formData.get("estimated-payment")?.toString() ?? "",
      recommendedDeliverables: {
        set: JSON.parse(formData.get("deliverables")?.toString() ?? "[]")
        // an array of recommended deliverables
      },
      athleteCount: parseInt(formData.get("number-of-athletes")?.toString() ?? "1"),
      singleOrMultiple: formData.get("single-or-multiple")?.toString() ?? "",
      publishDate: /* @__PURE__ */ new Date(),
      authUserId: user.userId,
      // the user id
      isCampaign: formData.get("is-campaign")?.toString() === "Campaign"
    };
    let deal;
    if (formData.get("deal-id")) {
      deal = await prismaClient.deal.update({
        where: {
          id: formData.get("deal-id").toString()
        },
        data
      });
      return { dealId: deal.id, noPublish: deal.active === "pending" };
    } else {
      deal = await prismaClient.deal.create({ data });
      return { dealId: deal.id, noPublish: deal.active === "pending" };
    }
  }
};
export {
  actions,
  load
};
