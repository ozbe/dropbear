const generateAuthorizationToken = () => {
  const credentials = `${process.env.USERNAME}:${process.env.PASSWORD}`;
  const encodedCredentials = Buffer.from(credentials, 'utf-8').toString('base64');
  return `Basic ${encodedCredentials}`;
};

const AUTHORIZATION_TOKEN = generateAuthorizationToken();

const genreatePolicy = (principalId, effect, resource) => {
  const authResponse = {
    principalId
  };

  if (effect && resource) {
    authResponse.policyDocument = {
      Version: '2012-10-17',
      Statement: [
          {
              Action: 'execute-api:Invoke',
              Effect: effect,
              Resource: resource,
          }
      ]
    }
  }

  return authResponse;
}

module.exports.authorizer = async (event) => {
  const authToken = event.authorizationToken;
  const methodArn = event.methodArn;

  if (!methodArn) {
    throw new Error('Missing method ARN');
  }

  if (authToken === AUTHORIZATION_TOKEN) {
    return genreatePolicy('user', 'allow', methodArn);
  }

  throw new Error('Unauthorized');
};