import { p as prismaClient } from "./db.js";
import { g as generateRandomString } from "./debug.js";
import sgMail from "@sendgrid/mail";
import { a as SEND_GRID_API } from "./private.js";
sgMail.setApiKey(SEND_GRID_API);
const sendEmail = async (emailAddress, rootUrl, subject, content) => {
  const msg = {
    to: `${emailAddress}`,
    // Change to your recipient
    from: {
      name: "DapUp Team",
      // Replace 'DapUp Team' with the desired sender name
      email: "admin@dapup.co"
      // Change to your verified sender email
    },
    subject,
    // text: 'and easy to do anywhere, even with Node.js',
    html: `${content}`
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
const sendEmailVerificationEmail = async (emailAddress, verificationToken, rootUrl) => {
  const verificationLink = `${rootUrl}/email-verification/${verificationToken}`;
  const emailContent = `
Welcome to DapUp!<br/><br/> 

We are thrilled that you've joined our community of college athletes seeking exclusive NIL deals and opportunities with brands. Thank you for signing up with us!<br/><br/>

While we verify your account, please complete your profile with relevant details about your bio, athletic background, and achievements. 
A complete profile expedites the verification process and enhances your DapUp experience. Our team will review your information swiftly 
and grant access to brand opportunities once your account is verified.<br/><br/>

<strong style="color:red">Click the following link to begin verifying your account:</strong><br/> <a href="${verificationLink}">${verificationLink}</a><br/><br/>

In the meantime, we invite you to explore our website, DapUp.co, familiarize yourself with our platform, share with your teammates, and stay tuned for incredible opportunities.
Have questions? Contact our support team at [support@dapup.co]. We are here to help you every step of the way.<br/><br/>

Thank you for choosing DapUp, the premier matchmaking platform for athletes and brands. Get ready to DapUp Your Game!<br/><br/>

Best regards,<br/><br/>

DapUp Team<br/>
`;
  await sendEmail(
    emailAddress,
    rootUrl,
    "Welcome to DapUp - Verification in Progress!",
    emailContent
  );
};
const sendEmailVerificationEmailBrand = async (emailAddress, verificationToken, rootUrl) => {
  const verificationLink = `${rootUrl}/email-verification/${verificationToken}`;
  const emailContent = `
	Welcome to DapUp!<br/><br/>
	Thank you for choosing DapUp as your platform to grow your business by connecting with college athletes for NIL marketing campaigns.<br/>
	At DapUp, we are dedicated to empowering brands like yours to collaborate with talented college athletes, creating winning partnerships that drive results.<br/><br/>

	While we verify your account, please complete your profile with relevant details about your brand.<br/>
	A complete profile expedites the verification process and enhances your DapUp experience. <br/>
	Our team will review your information swiftly and grant full access to the DapUp platform once your account is verified.<br/><br/>

<strong style="color:red">Click the following link to begin verifying your account:</strong><br/> <a href="${verificationLink}">${verificationLink}</a><br/><br/>

	In the meantime, we encourage you to explore our website, DapUp.co, familiarize yourself with our platform, and imagine the possibilities that await you.<br/>
	Have questions? Contact our support team at [support@dapup.co] or submit an inquiry right from out homepage. We are here to help you every step of the way.</br></br>

	Thank you for choosing DapUp, the premier matchmaking platform for athletes and brands. Get ready to DapUp Your Game!<br/><br/>

	Best regards,<br/><br/>

	DapUp Team<br/>
`;
  await sendEmail(
    emailAddress,
    rootUrl,
    "Welcome to DapUp - Verification in Progress!",
    emailContent
  );
};
const sendPasswordResetEmail = async (emailAddress, resetToken, rootUrl) => {
  const resetLink = `${rootUrl}/password-reset/${resetToken}`;
  const emailContent = `Please reset your password via the link below:<br/><br/>
    
<a href="${resetLink}">${resetLink}</a>`;
  await sendEmail(emailAddress, rootUrl, "Password reset", emailContent);
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
  sendEmailVerificationEmail as a,
  sendEmailVerificationEmailBrand as b,
  sendPasswordResetEmail as c,
  getEmail as d,
  getEmails as g,
  sendEmail as s
};
