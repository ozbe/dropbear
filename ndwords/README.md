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
1. `awscli` configured to the profile (AWS_PROFILE) to use for deployment

### Deploy

```
$ npx serverless deploy --aws-profile <AWS_PROFILE>
```

### Test

#### serverless

```
$ npx serverless invoke --function ndwords --aws-profile <AWS_PROFILE> --data " Hello everyone, today is a beautiful day! "
```

#### curl

**TODO** change to get endpoint
```
$ curl --request POST 'https://x2bhccdlqj.execute-api.us-east-1.amazonaws.com/ndwords' \
  --header 'Content-Type: text/plain' \
  --data-raw ' Hello everyone, today is a beautiful day! '
```

## Development

### Run

```
$ npx serverless invoke local --function ndwords --data " Hello everyone, today is a beautiful day! "
```

### Test

```
$ npm run test
```