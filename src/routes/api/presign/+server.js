import { S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'


import { S3_BUCKET, S3_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '$env/static/private'


export async function GET({ url, locals }) {
    //if (!locals.authorized) { throw error(401, 'unauthorized') }

    const id = generateObjectId()

    // this file type assignment is not secure, but it's just an example
    // you should screen this against a list of allowed file types since it is coming from the user's browser
    const fileType = url.searchParams.get('fileType')
    const s3ClientConfig = {
        region: S3_REGION, // Specify the AWS Region
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID, // AWS access key ID
            secretAccessKey: AWS_SECRET_ACCESS_KEY, // AWS secret access key
        },
    };


    const data = await createPresignedPost(new S3Client(s3ClientConfig), {
        Bucket: S3_BUCKET,
        Key: `${id}`,
        Conditions: [['content-length-range', 0, 52428800]],  //max of 10 mb
        Fields: { 'Content-Type': fileType },
        Expires: 60000, //Seconds before the presigned post expires. 3600 by default.
    })

    return new Response(JSON.stringify(data), { status: 200 })
}

function generateObjectId() {
    return String(Date.now() + crypto.randomUUID()).replace(/-/g, '')
}

