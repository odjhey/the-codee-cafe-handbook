#!/bin/bash

DIR=$(dirname  "$0")
cd "${DIR}"

docker-compose up -d
