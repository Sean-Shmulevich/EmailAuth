import twilio from 'twilio';

//TODO API KEYS
const accountSid = 'AC02236dcf3e7722b13c196c15719deee3';
const authToken = '74d7a775da45edcd779fe04c885db973';
const client = twilio(accountSid, authToken);
export async function post(phoneNumber, code) {
	console.log('INPOST ' + phoneNumber);
	try {
		const message = await client.messages.create({
			body: `https://dapup.co verification code ${code}`,
			from: '+14705708645',
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
