import { a as sendEmailVerificationEmail, b as sendEmailVerificationEmailBrand } from "../../../../chunks/email.js";
import { e as emailVerificationToken, a as auth } from "../../../../chunks/lucia.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import twilio from "twilio";
const accountSid = "AC02236dcf3e7722b13c196c15719deee3";
const authToken = "74d7a775da45edcd779fe04c885db973";
const client = twilio(accountSid, authToken);
async function post(phoneNumber, code) {
  console.log("INPOST " + phoneNumber);
  try {
    const message = await client.messages.create({
      body: `https://dapup.co verification code ${code}`,
      from: "+14705708645",
      to: phoneNumber
    });
    return {
      status: 200,
      body: {
        sid: message.sid
      }
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: {
        error: error.message
      }
    };
  }
}
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) {
    throw redirect(302, "/login");
  }
  if (user.emailVerified) {
    throw redirect(302, "/");
  }
  return {
    user
  };
};
const actions = {
  sendEmail: async ({ request, locals, url }) => {
    const { user } = await locals.auth.validateUser();
    const formData = await request.formData();
    const lock = await formData.get("lock");
    if (lock === "exist") {
      return fail(401, {
        textSent: "Please wait 1 minute before resending the text"
      });
    }
    if (!user || user.emailVerified) {
      return fail(401, {
        message: "Unauthorized"
      });
    }
    try {
      const token = await emailVerificationToken.issue(user.userId);
      if (!user.isBrand) {
        await sendEmailVerificationEmail(user.email, token.toString(), url.origin);
      } else {
        await sendEmailVerificationEmailBrand(user.email, token.toString(), url.origin);
      }
      return {
        emailSent: "Email Sent"
      };
    } catch (e) {
      console.log(e);
      return fail(500, {
        message: "An unknown error occurred"
      });
    }
  },
  validateCode: async ({ locals, url, request }) => {
    const formData = await request.formData();
    const tokenData = await formData.get("token");
    console.log(tokenData);
    try {
      const token = await emailVerificationToken.validate(tokenData.toString());
      console.log(token);
      await auth.invalidateAllUserSessions(token.userId);
      await auth.updateUserAttributes(token.userId, {
        email_verified: true
      });
      const session = await auth.createSession(token.userId);
      locals.auth.setSession(session);
    } catch (e) {
      console.log(e);
      return fail(401, { message: "Invalid Code" });
    }
    throw redirect(302, "/");
  },
  sendText: async ({ locals, url, request }) => {
    const { user } = await locals.auth.validateUser();
    const formData = await request.formData();
    let phoneNumber = await formData.get("phoneNumber").toString();
    const lock = await formData.get("lock");
    if (phoneNumber === "undefined" || !phoneNumber) {
      return fail(401, {
        textSent: "Please input a valid phone number"
      });
    }
    phoneNumber = phoneNumber.replace(/-/g, "");
    console.log(phoneNumber);
    if (lock === "exist") {
      return fail(401, {
        textSent: "Please wait 1 minute before resending the text"
      });
    }
    if (!user || user.emailVerified) {
      return fail(401, {
        message: "Expired session try again"
      });
    }
    try {
      const token = await emailVerificationToken.issue(user.userId);
      if (!user.isBrand) {
        await post("+1" + phoneNumber, token);
        return {
          textSent: "Text Sent please wait up to a minute"
        };
      } else {
        await post("+1" + phoneNumber, token);
        return {
          textSent: "Text Sent please wait up to a minute"
        };
      }
    } catch (e) {
      console.log(e);
      return fail(500, {
        message: "Expired session try again"
      });
    }
  }
};
export {
  actions,
  load
};
