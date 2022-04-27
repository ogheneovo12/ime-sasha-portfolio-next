#!/bin/bash
# tmp_dir=$(mktemp -d -t)

function get_locale {
  lokalise2 file download \
  --token 629c65894a024bc198a6f95742c8008e21598456 \
  --project-id 355593476267ca49322035.97909659 \
  --format json \
  --json-unescaped-slashes \
  --replace-breaks=false \
  --unzip-to ./src/locales/
}

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  get_locale 
elif [[ "$OSTYPE" == "darwin"* ]]; then
  get_locale 
fi


