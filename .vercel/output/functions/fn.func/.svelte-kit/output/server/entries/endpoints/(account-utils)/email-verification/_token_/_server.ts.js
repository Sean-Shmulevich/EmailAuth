import { e as emailVerificationToken, a as auth } from "../../../../../chunks/lucia.js";
import { r as redirect } from "../../../../../chunks/index.js";
const GET = async ({ params, locals }) => {
  const tokenParams = params.token;
  try {
    const token = await emailVerificationToken.validate(tokenParams);
    await auth.invalidateAllUserSessions(token.userId);
    await auth.updateUserAttributes(token.userId, {
      email_verified: true
    });
    const session = await auth.createSession(token.userId);
    locals.auth.setSession(session);
  } catch (e) {
    console.log(e);
    return new Response(null, {
      status: 401
    });
  }
  throw redirect(302, "/");
};
export {
  GET
};
