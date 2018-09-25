#!/bin/bash

curl https://sentry.io/api/hooks/release/builtin/1287731/e3e441af1b7bf9fc65219130ffcdd8f5bc552e3653de4667339b7b2a6e296273/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
 "version": "'"$TRAVIS_BUILD_ID"'",
 "refs": [{
 "repository":"FabianWilms/anwctrl",
 "commit":"'"$TRAVIS_COMMIT"'"
 }]
}'