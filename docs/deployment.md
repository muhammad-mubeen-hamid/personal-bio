# Deployment (S3 + CloudFront, Local CLI)

This project deploys locally via:
- [`scripts/deploy.sh`](../scripts/deploy.sh)

## 1) One-Time AWS Setup

1. Create an S3 bucket for static files (private bucket).
2. Create a CloudFront distribution using the S3 bucket as origin.
3. Enable Origin Access Control (OAC) so only CloudFront can read S3.
4. Add ACM certificate in `us-east-1` and attach your custom domain to CloudFront.
5. Point Route 53 `A/AAAA` alias records to the CloudFront distribution.

S3 bucket policy example (allow CloudFront OAC read access):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontRead",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<YOUR_BUCKET_NAME>/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::<YOUR_AWS_ACCOUNT_ID>:distribution/<YOUR_DISTRIBUTION_ID>"
        }
      }
    }
  ]
}
```

## 2) IAM Permissions For Deploy User/Role

Attach a policy that allows:
- `s3:ListBucket` on your bucket
- `s3:PutObject`, `s3:DeleteObject`, `s3:GetObject` on bucket objects
- `cloudfront:CreateInvalidation` on your distribution

Example policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3BucketList",
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::<YOUR_BUCKET_NAME>"
    },
    {
      "Sid": "S3ObjectReadWrite",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
    },
    {
      "Sid": "CloudFrontInvalidation",
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "arn:aws:cloudfront::<YOUR_AWS_ACCOUNT_ID>:distribution/<YOUR_DISTRIBUTION_ID>"
    }
  ]
}
```

## 3) Local Deploy (Current Setup)

For this project, after you make changes, run:

```bash
AWS_PROFILE=personal \
AWS_REGION=us-east-1 \
AWS_S3_BUCKET=personal-dating-bucket \
AWS_CLOUDFRONT_DISTRIBUTION_ID=E1XK1U2UGGJ96W \
yarn deploy
```

What it does:
- Builds the app
- Uploads `dist/` to S3 with cache headers
- Creates CloudFront invalidation

If you already built and want upload + invalidation only:

```bash
AWS_PROFILE=personal \
AWS_REGION=us-east-1 \
AWS_S3_BUCKET=personal-dating-bucket \
AWS_CLOUDFRONT_DISTRIBUTION_ID=E1XK1U2UGGJ96W \
yarn deploy:skip-build
```

Check latest invalidation status:

```bash
AWS_PROFILE=personal \
aws cloudfront list-invalidations \
  --distribution-id E1XK1U2UGGJ96W \
  --max-items 1
```

Apply/update the OAC bucket policy locally:

```bash
AWS_PROFILE=personal \
AWS_S3_BUCKET=personal-dating-bucket \
AWS_ACCOUNT_ID=773505263354 \
AWS_CLOUDFRONT_DISTRIBUTION_ID=E1XK1U2UGGJ96W \
yarn oac:apply-policy
```
