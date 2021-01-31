# newline delimited words (ndwords)

Planning, work, and improvements were tracked in [TODO](./TODO.md)

## Setup

**NOTE** Tested on `macOS 11.1 (20C69)`, but there are no platform dependent tools used for this solution.

```
# Optional to ensure you use the tested version of Node
$ nvm install 

# Install dependencies
$ npm install
```

## Deployment

### Prereqs

1. `awscli` configured to the profile (`AWS_PROFILE`) to use for deployment. If you use your default AWS profile, you can remove the `--aws-profile <AWS_PROFILE>` portion of the commands below.

### Deploy

```
$ npx serverless deploy --aws-profile <AWS_PROFILE>
```

### Test

#### curl

**NOTE** If you changed the `authorizer`'s `USERNAME` and `PASSWORD` in `serverless.yml`, you will have to change the credentials in the `Authorization` header.

```
$ ENDPOINT=$(npx serverless info --aws-profile <AWS_PROFILE> | awk '{ if ($1 == "POST" )  print $3 }')
$ curl -i --request POST $ENDPOINT \
--header 'Authorization: Basic YWRtaW46YWRtaW4=' \
--header 'Content-Type: text/plain' \
--data-raw ' Hello everyone, today is a beautiful day! '
```

### Cleanup

Delete the contents of the S3 buckets created by serverless (see `ndwords-dev` CloudFormation Stack). 

After removing the S3 bucket contents, run the following to remove the CloudFormation Stack:
```
$ npx serverless remove
```

## Development

### Test

```
$ npm run test
```