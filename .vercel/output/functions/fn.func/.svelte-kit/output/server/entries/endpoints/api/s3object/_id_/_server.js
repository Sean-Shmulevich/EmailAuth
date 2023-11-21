import AWS from "aws-sdk";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { p as prismaClient } from "../../../../../chunks/db.js";
import "../../../../../chunks/lucia.js";
import { e as error } from "../../../../../chunks/index.js";
import { S as S3_BUCKET } from "../../../../../chunks/private.js";
async function GET({ params, locals }) {
  const key = params.id;
  const s3 = new AWS.S3();
  let stream = s3.getObject({ Bucket: S3_BUCKET, Key: key }).createReadStream();
  return new Response(stream, { status: 200 });
}
async function DELETE({ params, locals }) {
  const key = params.id;
  const s3 = new S3Client();
  let obj = await s3.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: key }));
  return new Response(obj);
}
async function POST({ request, locals }) {
  const { user } = await locals.auth.validateUser();
  if (!user || !user.emailVerified) {
    throw error(401, "unauthorized");
  }
  const data = await request.formData();
  if (!data.get("fileName") || !data.get("fileType") || !data.get("fileSize") || !data.get("objectId")) {
    throw error(500, "bad format");
  }
  let document;
  try {
    if (data.get("deal_id") && !data.get("athlete_id")) {
      const existingImage = await prismaClient.dealImages.findFirst({
        where: {
          dealId: data.get("deal_id")
        }
      });
      if (existingImage) {
        const s3 = new S3Client();
        let obj = await s3.send(
          new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: existingImage.id })
        );
        await prismaClient.dealImages.delete({
          where: { id: existingImage.id }
        });
      }
      document = await prismaClient.dealImages.create({
        data: {
          id: data.get("objectId"),
          file_name: data.get("fileName"),
          file_size: parseInt(data.get("fileSize")),
          file_type: data.get("fileType"),
          image_number: parseInt(data.get("position")),
          dealId: data.get("deal_id")
        }
      });
    } else if (data.get("athlete_id")) {
      const dealStatus = await prismaClient.userDealStatus.findFirst({
        where: {
          userId: data.get("athlete_id"),
          dealId: data.get("deal_id")
        }
      });
      if (dealStatus.contractId) {
        const s3 = new S3Client();
        let obj = await s3.send(
          new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: dealStatus.contractId })
        );
        await prismaClient.contract.delete({
          where: { id: dealStatus.contractId }
        });
      }
      document = await prismaClient.contract.create({
        data: {
          id: data.get("objectId"),
          file_name: data.get("fileName"),
          file_size: parseInt(data.get("fileSize")),
          file_type: data.get("fileType"),
          userId: data.get("athlete_id")
        }
      });
      await prismaClient.userDealStatus.update({
        where: {
          userId_dealId: {
            userId: data.get("athlete_id"),
            dealId: data.get("deal_id")
          }
        },
        data: {
          contractId: document.id,
          status: "brand-finalized"
        }
      });
    } else {
      const position = parseInt(data.get("position"));
      const existingImage = await prismaClient.object.findFirst({
        where: {
          userId: user.userId,
          image_number: position
        }
      });
      if (existingImage) {
        const s3 = new S3Client();
        let obj = await s3.send(
          new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: existingImage.id })
        );
        await prismaClient.object.delete({
          where: { id: existingImage.id }
        });
      }
      document = await prismaClient.object.create({
        data: {
          id: data.get("objectId"),
          file_name: data.get("fileName"),
          file_size: parseInt(data.get("fileSize")),
          file_type: data.get("fileType"),
          image_number: parseInt(data.get("position")),
          userId: user.userId
        }
      });
    }
  } catch (error2) {
    console.log(error2);
  }
  if (document.id) {
    return new Response(document.id, { status: 200 });
  }
}
export {
  DELETE,
  GET,
  POST
};
