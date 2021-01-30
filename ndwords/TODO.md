# newline delimited words (ndwords)

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
**Note** that it looks like the text is trimmed... or there is something with the encoding (pdf fun?).
**NOTE** `everyone` and `day` seem to capitalized, this may be a mistake in the question, but work pointing out.

**Bonus Points**
Secure endpoint with Basic Auth and enforce HTTPS for API requests

## Plan

- [x] Create and test javascript (js) function to parse message
- [x] Use serverless to deploy api gateway and `ndwords` lambda, returning the js function output in the response
- [ ] Return only a 200 from the `ndwords` lambda and store the js function output in S3
- [ ] Create `authorizer` function and assign authorizer to `ndwords` lambda
  1. Support only one username and password for testing
  2. Username and password should be variables

### Outstanding questions

1. What wil the S3 file names and format be?
  1. Can use timestamps and request id
  2. store as `.txt`

## Alternatives

### Terraform vs Serverless
Serverless enables you to quickly and effectively create AWS resources and deploy lambda functions. Given this is a technical challenge, I went with Severless for expediency. We could use Terraform to solve the same problem (though, I likely wouldn't deploy the lambdas themselves via Terraoform), but it would take more effort to do the initial setup and deployment.

**TODO** This assumes servleress works as I hope and it is that quick. Revisit later


## Notes


### Basic Auth

```
echo -n "username:password" | base64
```

## References 

- https://registry.terraform.io/providers/hashicorp/aws/latest/docs
- https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html