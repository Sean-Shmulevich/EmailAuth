import { prismaClient } from '$lib/db';
import type { Email as DatabaseEmail } from '@prisma/client';
import { generateRandomString } from 'lucia-auth';
import sgMail from '@sendgrid/mail';
import { SEND_GRID_API, ROOT_URL } from '$env/static/private';

sgMail.setApiKey(SEND_GRID_API);

export const sendEmail = async (emailAddress: string, subject: string, content: string) => {
	const msg = {
		to: `${emailAddress}`, // Change to your recipient
		from: 'admin@dapup.co', // Change to your verified sender
		subject: subject,
		// text: 'and easy to do anywhere, even with Node.js',
		html: `${content}`
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
	await prismaClient.email.create({
		data: {
			id: generateRandomString(8),
			subject,
			email_address: emailAddress,
			content,
			date_sent: new Date()
		}
	});
};

export const sendEmailVerificationEmail = async (
	emailAddress: string,
	verificationToken: string
) => {
	const verificationLink = `${ROOT_URL}/email-verification/${verificationToken}`;
	const emailContent = `
Welcome to DapUp!<br/> We are thrilled that you've joined our community of college athletes seeking exclusive NIL deals and opportunities with brands.<br/> Thank you for signing up with us!
While we verify your account, please complete your profile with relevant details about your bio, athletic background, and achievements.<br/> A complete profile expedites the verification process and enhances your DapUp experience. Our team will review your information swiftly and grant access to brand opportunities once your account is verified.<br/>
Click the following link to begin verifying your account: <a href='${verificationLink}'>${verificationLink}</a><br/>
In the meantime, we invite you to explore our website, DapUp.co, familiarize yourself with our platform, share with your teammates, and stay tuned for incredible opportunities.<br/>
Have questions? Contact our support team at [support@email.com]. We are here to help you every step of the way.<br/>
Thank you for choosing DapUp, the premier matchmaking platform for athletes and brands. Get ready to DapUp Your Game!<br/>
Best regards,<br/>
DapUp Team<br/>
`;
	await sendEmail(emailAddress, 'Welcome to DapUp - Verification in Progress!', emailContent);
};

export const sendEmailVerificationEmailBrand = async (
	emailAddress: string,
	verificationToken: string
) => {
	const verificationLink = `${ROOT_URL}/email-verification/${verificationToken}`;
	const emailContent = `
	Thank you for choosing DapUp as your platform to grow your business by connecting with college athletes for NIL marketing campaigns.<br/> At DapUp, we are dedicated to empowering brands like yours to collaborate with talented college athletes, creating winning partnerships that drive results.<br/>

	While we verify your account, please complete your profile with relevant details about your brand. 

	A complete profile expedites the verification process and enhances your DapUp experience. Our team will review your information swiftly and grant full access to the DapUp platform once your account is verified.<br/>

	<strong>Click the following link to begin verifying your account: <a href="${verificationLink}">${verificationLink}</a></strong><br/>

	In the meantime, we encourage you to explore our website, DapUp.co, familiarize yourself with our platform, and imagine the possibilities that await you.<br/>

	Have questions? Contact our support team at [support@email.com]. We are here to help you every step of the way.</br>

	Thank you for choosing DapUp, the premier matchmaking platform for athletes and brands. Get ready to DapUp Your Game!<br/>

	Best regards,<br/>
	DapUp Team
`;
	await sendEmail(emailAddress, 'Welcome to DapUp - Verification in Progress!', emailContent);
};

export const sendPasswordResetEmail = async (emailAddress: string, resetToken: string) => {
	const resetLink = `${ROOT_URL}/password-reset/${resetToken}`;
	const emailContent = `Please reset your password via the link below:<br/><br/>
    
<a href="${resetLink}">${resetLink}</a>`;
	await sendEmail(emailAddress, 'Password reset', emailContent);
};

const transformDatabaseEmail = (databaseEmail: DatabaseEmail) => {
	return {
		emailId: databaseEmail.id,
		toAddress: databaseEmail.email_address,
		dateSent: databaseEmail.date_sent,
		subject: databaseEmail.subject,
		content: databaseEmail.content
	};
};

export const getEmails = async (emailAddressQuery?: string) => {
	const databaseEmails = await prismaClient.email.findMany({
		where: {
			email_address: {
				contains: emailAddressQuery ?? ''
			}
		},
		orderBy: {
			date_sent: 'desc'
		}
	});
	return databaseEmails.map((databaseEmail) => {
		return transformDatabaseEmail(databaseEmail);
	});
};

export const getEmail = async (emailId: string) => {
	const databaseEmail = await prismaClient.email.findFirst({
		where: {
			id: emailId
		}
	});
	if (!databaseEmail) return null;
	return transformDatabaseEmail(databaseEmail);
};
