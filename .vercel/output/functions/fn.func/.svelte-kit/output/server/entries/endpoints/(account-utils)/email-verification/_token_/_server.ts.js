import { e as emailVerificationToken, a as auth } from "../../../../../chunks/lucia.js";
import { r as redirect } from "../../../../../chunks/index.js";
const HEAD = async ({ params, locals }) => {
  const tokenParams = params.token;
  try {
    const isValid = await emailVerificationToken.validate(tokenParams);
    if (isValid) {
      return { status: 200 };
    } else {
      return { status: 404 };
    }
  } catch (e) {
    console.log(e);
    return { status: 500 };
  }
};
const GET = async ({ params, locals }) => {
  const tokenParams = params.token;
  try {
    const token = await emailVerificationToken.validate(tokenParams);
    console.log(token);
    await auth.invalidateAllUserSessions(token.userId);
    await auth.updateUserAttributes(token.userId, {
      email_verified: true
    });
    const session = await auth.createSession(token.userId);
    locals.auth.setSession(session);
  } catch (e) {
    console.log(e);
  }
  throw redirect(302, "/");
};
export {
  GET,
  HEAD
};
