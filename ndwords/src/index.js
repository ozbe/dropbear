const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const REGION = process.env.REGION;
const BUCKET_NAME = process.env.BUCKET_NAME;

function tokenize(input) {
  if (typeof input === 'string' || input instanceof String) {
    return input
      .split(/\b/) // split at word break
      .map(s => s.replace(/\s/g, '')) // remove whitespace
      .filter(s => s.length > 0); // remove empty strings
  }
  return [];
}
module.exports.tokenize = tokenize;

function generateContent(words) {
  return words.join('\n');
}
module.exports.generateContent = generateContent;

function generateFileName(requestContext) {
  return `${requestContext.timeEpoch}-${requestContext.requestId}`;
}

const s3Client = new S3Client({ region: REGION });

const upload = async (fileName, content) => {
  const params = { 
    Bucket: BUCKET_NAME,
    Body: content,
    Key: fileName,
  };

  await s3Client.send(new PutObjectCommand(params));
}

module.exports.ndwords = async (event, _context) => {
  let statusCode = 500;

  try {
    const fileName = generateFileName(event.requestContext);
    const tokens = tokenize(event.body);
    const content = generateContent(tokens);

    await upload(fileName, content)
    
    statusCode = 200;
  } catch (error) {
    console.log("Error", error);
  }

  return {
    statusCode,
  }
}