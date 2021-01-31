# newline delimited words (ndwords)

## Setup

```
# Optional to ensure you use the tested version of Node
$ nvm install 

# Install dependencies
$ npm install
```

## Deployment

### Prereqs

1. `awscli` configured to the profile (`AWS_PROFILE`) to use for deployment.

### Deploy

```
$ npx serverless deploy --aws-profile <AWS_PROFILE>
```

### Test

#### curl

**NOTE** If you changed the `authorizer`'s `USERNAME` and `PASSWORD`, you will have to change the credentials in the `Authorization` header.

```
$ ENDPOINT=$(npx serverless info --aws-profile dropbear | awk '{ if ($1 == "POST" )  print $3 }')
$ curl -i --request POST $ENDPOINT \
--header 'Authorization: Basic YWRtaW46YWRtaW4=' \
--header 'Content-Type: text/plain' \
--data-raw 'Hello everyone, today is a beautiful day! '
```

### Cleanup

Delete the contents of the S3 buckets created by serverless (CloudFormation). Then run:
```
$ npx serverless remove
```

## Development

### Test

```
$ npm run test
```