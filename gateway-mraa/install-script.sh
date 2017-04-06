#!/bin/bash

echo "Install dependencies..."
echo
apt-get update
apt-get install -y software-properties-common build-essential nodejs node-gyp npm

echo "Install MRAA and its dependencies.."
echo
add-apt-repository -y ppa:mraa/mraa
apt-get update
apt-get install -y libmraa1 libmraa-dev mraa-tools libupm-dev upm-examples

echo "Install MRAA plugin for java script..."
echo
#Install MRAA plugins for java script
npm install mraa -g

echo "Pick up the right node module...."
echo
# Pick up the right node binary
update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

echo "Export node path..."
echo
export NODE_PATH=/usr/local/lib/node_modules/

