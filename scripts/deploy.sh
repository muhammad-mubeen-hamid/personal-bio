#!/usr/bin/env bash
set -euo pipefail

require_var() {
  local var_name="$1"
  if [[ -z "${!var_name:-}" ]]; then
    echo "Missing required environment variable: ${var_name}" >&2
    exit 1
  fi
}

require_var "AWS_REGION"
require_var "AWS_S3_BUCKET"

DIST_DIR="dist"
S3_URI="s3://${AWS_S3_BUCKET}"

if [[ "${SKIP_BUILD:-0}" != "1" ]]; then
  echo "Building production bundle..."
  yarn build
fi

if [[ ! -d "${DIST_DIR}" ]]; then
  echo "Build output directory not found: ${DIST_DIR}/" >&2
  exit 1
fi

echo "Deploying ${DIST_DIR}/ to ${S3_URI}"

# 1) Upload versioned assets with long immutable cache.
if [[ -d "${DIST_DIR}/assets" ]]; then
  aws s3 sync "${DIST_DIR}/assets" "${S3_URI}/assets" \
    --region "${AWS_REGION}" \
    --delete \
    --cache-control "public,max-age=31536000,immutable"
fi

# 2) Upload root/static files (except index.html) with short cache.
aws s3 sync "${DIST_DIR}" "${S3_URI}" \
  --region "${AWS_REGION}" \
  --delete \
  --exclude "assets/*" \
  --exclude "index.html" \
  --cache-control "public,max-age=300,must-revalidate"

# 3) Upload index.html with no-store so new deploys are visible immediately.
aws s3 cp "${DIST_DIR}/index.html" "${S3_URI}/index.html" \
  --region "${AWS_REGION}" \
  --cache-control "no-store, max-age=0" \
  --content-type "text/html"

if [[ -n "${AWS_CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  echo "Invalidating CloudFront distribution ${AWS_CLOUDFRONT_DISTRIBUTION_ID}"
  aws cloudfront create-invalidation \
    --distribution-id "${AWS_CLOUDFRONT_DISTRIBUTION_ID}" \
    --paths "/*" >/dev/null
fi

echo "Deployment complete."
