import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S as S3_BUCKET } from "../../../../chunks/private.js";
async function GET({ url, locals }) {
  const id = generateObjectId();
  const fileType = url.searchParams.get("fileType");
  const data = await createPresignedPost(new S3Client(), {
    Bucket: S3_BUCKET,
    Key: `${id}`,
    Conditions: [["content-length-range", 0, 52428800]],
    //max of 10 mb
    Fields: { "Content-Type": fileType },
    Expires: 6e4
    //Seconds before the presigned post expires. 3600 by default.
  });
  return new Response(JSON.stringify(data), { status: 200 });
}
function generateObjectId() {
  return String(Date.now() + crypto.randomUUID()).replace(/-/g, "");
}
export {
  GET
};
