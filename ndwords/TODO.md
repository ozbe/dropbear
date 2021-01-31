# newline delimited words (ndwords)

## Oustanding Questions
1) In the example output it looks like the text is trimmed... or there is something with the encoding (pdf fun?). What encoding should be supported by this lambda and are there any special cases that should be considered?
2) In the example output,  `everyone` and `day` seem to capitalized. Is this a mistake or are there some undefined requirements to capilization?

## Requirements

* AWS API Gateway - ingress, POST
* Lambda - convert payload and store in s3
* S3 - storage

Convert body to a file that contains all the words (and punctuation) on new lines.

Input
`​Hello everyone, today is a beautiful day! ​`

Output
```
Hello 
Everyone
,
today
is
a
beautiful
Day
!
```

**Bonus Points**
Secure endpoint with Basic Auth and enforce HTTPS for API requests

## Plan

- [x] Create and test javascript (js) function to parse message
- [x] Use serverless to deploy api gateway and `ndwords` lambda, returning the js function output in the response
- [x] Return only a 200 from the `ndwords` lambda and store the js function output in S3
- [x] Create `authorizer` function and assign authorizer to `ndwords` lambda
  1. Support only one username and password for testing
  2. Username and password should be variables

### Outstanding questions

1. What wil the S3 file names and format be?
  1. Can use timestamps and request id
  2. store as `.txt`

## Alternatives

### Terraform vs Serverless
Serverless enables you to quickly and effectively create AWS resources and deploy lambda functions. Given this is a technical challenge, I went with Severless for expediency. We could use Terraform to solve the same problem (though, I likely wouldn't deploy the lambdas themselves via Terraoform), but it would take more effort to do the initial setup and deployment.

## Improvements

* Improve the authorization with using something like Cognito or Auth0
  * At the very least get the `PASSWORD` out of `serverless.yml`
* Review Resource access
* Evaluate if there is room to optimize the Lambda size
* Better test coverage (and output test coverage). 
  * More inputs for transform
  * The handler and upload have no test coverage
* Typescript support for type safety and errors during development and build time
* Convert to ES6 modules for consistency across projects
* `sls invoke local` support for local testing to avoid needing to deploy. This broke when I added the S3 bucket, but can be fixed.
  * Something like `npx serverless invoke local --function ndwords --data " Hello everyone, today is a beautiful day! "`
* serverless-offline for local development
  * https://www.serverless.com/plugins/serverless-offline-local-authorizers-plugin
* If the resources being created are used by other Lambda functions or services, it may be better to move the resource management to something like Terraform.
* Add linting