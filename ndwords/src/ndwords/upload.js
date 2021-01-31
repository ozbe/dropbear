const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const REGION = process.env.REGION;
const BUCKET_NAME = process.env.BUCKET_NAME;

const s3Client = new S3Client({ region: REGION });

module.exports.upload = (fileName, content) => {
  const params = { 
    Bucket: BUCKET_NAME,
    Body: content,
    Key: fileName,
  };

  return s3Client.send(new PutObjectCommand(params));
}