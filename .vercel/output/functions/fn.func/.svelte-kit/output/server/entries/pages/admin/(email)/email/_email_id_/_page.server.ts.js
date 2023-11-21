import { e as error, r as redirect } from "../../../../../../chunks/index.js";
import { d as getEmail } from "../../../../../../chunks/email.js";
import { p as prismaClient } from "../../../../../../chunks/db.js";
const load = async ({ params }) => {
  const email = await getEmail(params.email_id ?? "");
  if (!email) {
    throw error(404, {
      message: "Not found"
    });
  }
  return {
    email
  };
};
const actions = {
  default: async ({ params }) => {
    await prismaClient.email.delete({
      where: {
        id: params.email_id ?? ""
      }
    });
    throw redirect(302, "/email");
  }
};
export {
  actions,
  load
};
