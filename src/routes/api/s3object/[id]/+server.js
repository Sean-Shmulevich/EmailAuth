import AWS from 'aws-sdk';
import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { prismaClient } from '$lib/db';
import { auth } from '$lib/lucia';
import { error } from '@sveltejs/kit';

import { S3_BUCKET, S3_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '$env/static/private'

const s3ClientConfig = {
	region: S3_REGION, // Specify the AWS Region
	credentials: {
		accessKeyId: AWS_ACCESS_KEY_ID, // AWS access key ID
		secretAccessKey: AWS_SECRET_ACCESS_KEY, // AWS secret access key
	},
};

export async function GET({ params, locals }) {
	//if (!locals.authorized) { throw error(401, 'unauthorized') }
	//todo: add check to make sure this object belongs to the user
	const key = params.id;
	const s3 = new AWS.S3();
	let stream = s3.getObject({ Bucket: S3_BUCKET, Key: key }).createReadStream();
	let readableStream = new ReadableStream({
		start(controller) {
			stream.on('data', chunk => controller.enqueue(chunk));
			stream.on('end', () => controller.close());
			stream.on('error', err => controller.error(err));
		}
	})
	return new Response(readableStream, { status: 200 });
}

export async function DELETE({ params, locals }) {
	//if (!locals.authorized) { throw error(401, 'unauthorized') }
	//todo: add check to make sure this user has permission to delete this object
	//todo: remove from db
	const key = params.id;

	const s3 = new S3Client(s3ClientConfig);
	let obj = await s3.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: key }));
	return new Response(JSON.stringify(obj));
}

export async function POST({ request, locals }) {
	//TODO: add check to make sure this user has permission to add this object with lucia maybe
	//if (!locals.authorized) { throw error(401, 'unauthorized') }
	// called after user has done presigned post.
	// add object to db
	const { user } = await locals.auth.validateUser();

	if (!user || !user.emailVerified) {
		throw error(401, 'unauthorized');
	}

	const data = await request.formData();
	if (
		!data.get('fileName') ||
		!data.get('fileType') ||
		!data.get('fileSize') ||
		!data.get('objectId')
	) {
		throw error(500, 'bad format');
	}
	let document;
	try {
		if (data.get('deal_id') && !data.get('athlete_id')) {
			const existingImage = await prismaClient.dealImages.findFirst({
				where: {
					dealId: data.get('deal_id')?.toString()
				}
			});
			if (existingImage) {
				const s3 = new S3Client(s3ClientConfig);
				let obj = await s3.send(
					new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: existingImage.id })
				);

				// Delete the existing image record from the database
				await prismaClient.dealImages.delete({
					where: { id: existingImage.id }
				});
			}
			document = await prismaClient.dealImages.create({
				data: {
					id: data.get('objectId')?.toString(),
					file_name: data.get('fileName')?.toString(),
					file_size: parseInt(data.get('fileSize')?.toString()),
					file_type: data.get('fileType')?.toString(),
					image_number: parseInt(data.get('position')?.toString()),
					dealId: data.get('deal_id')?.toString()
				}
			});
		} else if (data.get('athlete_id')?.toString()) {
			const dealStatus = await prismaClient.userDealStatus.findFirst({
				where: {
					userId: data.get('athlete_id')?.toString(),
					dealId: data.get('deal_id')?.toString()
				}
			});
			//TODO
			//THEY SHOUDNT RLY BE ABLE TO ADD A NEW CONTRACT
			if (dealStatus.contractId) {
				const s3 = new S3Client(s3ClientConfig);
				let obj = await s3.send(
					new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: dealStatus.contractId })
				);

				// Delete the existing image record from the database
				await prismaClient.contract.delete({
					where: { id: dealStatus.contractId }
				});
			}

			document = await prismaClient.contract.create({
				data: {
					id: data.get('objectId')?.toString(),
					file_name: data.get('fileName')?.toString(),
					file_size: parseInt(data.get('fileSize')?.toString()),
					file_type: data.get('fileType')?.toString(),
					userId: data.get('athlete_id')?.toString()
				}
			});
			await prismaClient.userDealStatus.update({
				where: {
					userId_dealId: {
						userId: data.get('athlete_id')?.toString(),
						dealId: data.get('deal_id')?.toString()
					}
				},
				data: {
					contractId: document.id,
					status: 'brand-finalized'
				}
			});
		} else {
			// Get existing image details from the database
			const position = parseInt(data.get('position')?.toString());
			//if I make multiple users will it
			// - find the object with the first image_number for a specific user?
			// - find the first object with that existing image number?
			const existingImage = await prismaClient.object.findFirst({
				where: {
					userId: user.userId,
					image_number: position
				}
			});

			// If there is an existing image, delete it
			if (existingImage) {
				const s3 = new S3Client(s3ClientConfig);
				let obj = await s3.send(
					new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: existingImage.id })
				);

				// Delete the existing image record from the database
				await prismaClient.object.delete({
					where: { id: existingImage.id }
				});
			}
			document = await prismaClient.object.create({
				data: {
					id: data.get('objectId')?.toString(),
					file_name: data.get('fileName')?.toString(),
					file_size: parseInt(data.get('fileSize')?.toString()),
					file_type: data.get('fileType')?.toString(),
					image_number: parseInt(data.get('position')?.toString()),
					userId: user.userId
				}
			});
		}
	} catch (error) {
		console.log(error);
	}
	if (document.id) {
		return new Response(document.id, { status: 200 });
	}
}
