#!/bin/sh

rm -rf out/
rm -rf .next/

yarn build

if [ $? != 0 ]; then
  exit 1
fi

aws s3 sync ./out/ s3://$S3_BUCKET

. ./scripts/invalidate-cache.sh
