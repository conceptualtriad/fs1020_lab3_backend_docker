#!/bin/bash

docker-compose down -v --remove-orphans
sudo rm -r ./data
docker-compose up --build
