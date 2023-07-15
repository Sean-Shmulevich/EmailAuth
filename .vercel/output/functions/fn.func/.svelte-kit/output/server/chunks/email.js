import { p as prismaClient, g as generateRandomString } from "./debug.js";
import sgMail from "@sendgrid/mail";
import { a as SEND_GRID_API, R as ROOT_URL } from "./private.js";
sgMail.setApiKey(SEND_GRID_API);
const sendEmail = async (emailAddress, subject, content) => {
  const msg = {
    to: `${emailAddress}`,
    // Change to your recipient
    from: "seanshmulevich@gmail.com",
    // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong>and easy to do anywhere, even with Node.js</strong> ${content}`
  };
  sgMail.send(msg).then(() => {
    console.log("Email sent");
  }).catch((error) => {
    console.error(error);
  });
  await prismaClient.email.create({
    data: {
      id: generateRandomString(8),
      subject,
      email_address: emailAddress,
      content,
      date_sent: /* @__PURE__ */ new Date()
    }
  });
};
const sendEmailVerificationEmail = async (emailAddress, verificationToken) => {
  const verificationLink = `${ROOT_URL}/email-verification/${verificationToken}`;
  const emailContent = `Please verify your email by clicking the link below:<br/><br/>
<a href="${verificationLink}">${verificationLink}</a>`;
  await sendEmail(emailAddress, "Email verification", emailContent);
};
const sendPasswordResetEmail = async (emailAddress, resetToken) => {
  const resetLink = `${ROOT_URL}/password-reset/${resetToken}`;
  const emailContent = `Please reset your password via the link below:<br/><br/>
    
<a href="${resetLink}">${resetLink}</a>`;
  await sendEmail(emailAddress, "Password reset", emailContent);
};
const transformDatabaseEmail = (databaseEmail) => {
  return {
    emailId: databaseEmail.id,
    toAddress: databaseEmail.email_address,
    dateSent: databaseEmail.date_sent,
    subject: databaseEmail.subject,
    content: databaseEmail.content
  };
};
const getEmails = async (emailAddressQuery) => {
  const databaseEmails = await prismaClient.email.findMany({
    where: {
      email_address: {
        contains: emailAddressQuery ?? ""
      }
    },
    orderBy: {
      date_sent: "desc"
    }
  });
  return databaseEmails.map((databaseEmail) => {
    return transformDatabaseEmail(databaseEmail);
  });
};
const getEmail = async (emailId) => {
  const databaseEmail = await prismaClient.email.findFirst({
    where: {
      id: emailId
    }
  });
  if (!databaseEmail)
    return null;
  return transformDatabaseEmail(databaseEmail);
};
export {
  getEmail as a,
  sendEmailVerificationEmail as b,
  sendPasswordResetEmail as c,
  getEmails as g,
  sendEmail as s
};
