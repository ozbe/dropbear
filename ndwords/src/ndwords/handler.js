const { transform } = require('./transform');
const { upload } = require('./upload');

const generateFileName = (requestContext) => {
  return `${requestContext.requestTimeEpoch}-${requestContext.requestId}`;
}

module.exports.ndwords = async (event) => {
  let statusCode = 500;

  try {
    const fileName = generateFileName(event.requestContext);
    const content = transform(event.body);

    await upload(fileName, content)
    
    statusCode = 200;
  } catch (error) {
    console.log("Error", error);
  }

  return {
    statusCode,
  }
}