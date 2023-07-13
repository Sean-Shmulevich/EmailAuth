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

	if (!user) {
		throw error(401, 'unauthorized');
	}

	const data = await request.formData();
	if (
		!data.get('position') ||
		!data.get('fileName') ||
		!data.get('fileType') ||
		!data.get('fileSize') ||
		!data.get('objectId')
	) {
		throw error(500, 'bad format');
	}
	let document;
	try {
		// Get existing image details from the database
		const position = parseInt(data.get('position'));
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
	} catch (error) {
		console.log(error);
	}
	if (document.id) {
		return new Response(document.id, { status: 200 });
	}
}
