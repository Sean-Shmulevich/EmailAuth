import AWS from 'aws-sdk';
import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { prismaClient } from '$lib/db';
import { auth } from '$lib/lucia';
import { error } from '@sveltejs/kit';

import { S3_BUCKET } from '$env/static/private';

export async function GET({ params, locals }) {
	//if (!locals.authorized) { throw error(401, 'unauthorized') }
	//todo: add check to make sure this object belongs to the user
	const key = params.id;
	const s3 = new AWS.S3();
	let stream = s3.getObject({ Bucket: S3_BUCKET, Key: key }).createReadStream();
	return new Response(stream, { status: 200 });
}

export async function DELETE({ params, locals }) {
	//if (!locals.authorized) { throw error(401, 'unauthorized') }
	//todo: add check to make sure this user has permission to delete this object
	//todo: remove from db
	const key = params.id;
	const s3 = new S3Client();
	let obj = await s3.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: key }));
	return new Response(obj);
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
					dealId: data.get('deal_id')
				}
			});
			if (existingImage) {
				const s3 = new S3Client();
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
					id: data.get('objectId'),
					file_name: data.get('fileName'),
					file_size: parseInt(data.get('fileSize')),
					file_type: data.get('fileType'),
					image_number: parseInt(data.get('position')),
					dealId: data.get('deal_id')
				}
			});
		} else if (data.get('athlete_id')) {
			const dealStatus = await prismaClient.userDealStatus.findFirst({
				where: {
					userId: data.get('athlete_id'),
					dealId: data.get('deal_id')
				}
			});
			//TODO
			//THEY SHOUDNT RLY BE ABLE TO ADD A NEW CONTRACT
			if (dealStatus.contractId) {
				const s3 = new S3Client();
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
					id: data.get('objectId'),
					file_name: data.get('fileName'),
					file_size: parseInt(data.get('fileSize')),
					file_type: data.get('fileType'),
					userId: data.get('athlete_id')
				}
			});
			await prismaClient.userDealStatus.update({
				where: {
					userId_dealId: {
						userId: data.get('athlete_id'),
						dealId: data.get('deal_id')
					}
				},
				data: {
					contractId: document.id,
					status: 'brand-finalized'
				}
			});
		} else {
			// Get existing image details from the database
			const position = parseInt(data.get('position'));
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
				const s3 = new S3Client();
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
					id: data.get('objectId'),
					file_name: data.get('fileName'),
					file_size: parseInt(data.get('fileSize')),
					file_type: data.get('fileType'),
					image_number: parseInt(data.get('position')),
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
