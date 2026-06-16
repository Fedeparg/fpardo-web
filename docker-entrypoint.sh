#!/bin/sh
set -e
envsubst '${NOTION_TOKEN}' \
  < /etc/nginx/conf.d/default.conf.template \
  > /etc/nginx/conf.d/default.conf
exec nginx -g 'daemon off;'
