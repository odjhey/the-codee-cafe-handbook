#!/bin/bash

DIR=$(dirname  "$0")
cd "${DIR}"

docker-compose build  --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa)"
