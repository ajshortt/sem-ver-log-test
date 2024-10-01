#!/bin/bash

# Get the current git commit SHA
COMMIT_SHA=$(git rev-parse HEAD)

# Specify the output directory and file
OUTPUT_DIR="src/config"
OUTPUT_FILE="$OUTPUT_DIR/release.config.js"

# Check if the directory exists, if not, create it
if [ ! -d "$OUTPUT_DIR" ]; then
  echo "Directory $OUTPUT_DIR does not exist. Creating it now..."
  mkdir -p "$OUTPUT_DIR"
fi

# Create the JS file and inject the commit SHA
echo "export const CURRENT_SHA = '$COMMIT_SHA';" > "$OUTPUT_FILE"

# Print success message
echo "Created $OUTPUT_FILE with current Git SHA: $COMMIT_SHA"
