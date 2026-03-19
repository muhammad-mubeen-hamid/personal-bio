#!/usr/bin/env bash
set -euo pipefail

require_var() {
  local var_name="$1"
  if [[ -z "${!var_name:-}" ]]; then
    echo "Missing required environment variable: ${var_name}" >&2
    exit 1
  fi
}

require_var "AWS_S3_BUCKET"
require_var "AWS_ACCOUNT_ID"
require_var "AWS_CLOUDFRONT_DISTRIBUTION_ID"

POLICY_JSON="$(mktemp)"
trap 'rm -f "${POLICY_JSON}"' EXIT

cat >"${POLICY_JSON}" <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontOACRead",
      "Effect": "Allow",
      "Principal": { "Service": "cloudfront.amazonaws.com" },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${AWS_S3_BUCKET}/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::${AWS_ACCOUNT_ID}:distribution/${AWS_CLOUDFRONT_DISTRIBUTION_ID}"
        }
      }
    }
  ]
}
EOF

echo "Applying bucket policy to s3://${AWS_S3_BUCKET}"
aws s3api put-bucket-policy \
  --bucket "${AWS_S3_BUCKET}" \
  --policy "file://${POLICY_JSON}"

echo "Bucket policy applied."
