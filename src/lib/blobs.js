import 'backblaze-b2' as b2;

const accountId = '000b688089920e30000000001';
const applicationKey = 'K00084gKrZVhueC01fFiWQrpkX2bBOY';
const bucketName = 'dapupimg';

const B2 = b2({
	accountId,
	applicationKey
});


console.log('first');

try {
    const response = await fetch("https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png");
    const fileData = await response.arrayBuffer();
    const buffer = Buffer.from(fileData);


	const { fileId } = await b2.uploadFileContents({
		bucketId: bucketName,
		filename: "image.png",
		data: buffer 
	});

	console.log(`File uploaded successfully! File ID: ${fileId}`);
} catch (error) {
	console.error('Error uploading file:', error);
}

