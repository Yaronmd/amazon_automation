#!/bin/bash
set -e

echo "Building and installing amazon-cypress..."
docker build -t amazon-cypress .
echo "Build complete!"

echo "Starting running amazon-cypress tests..."
docker run --rm amazon-cypress