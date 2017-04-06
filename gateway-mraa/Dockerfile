FROM ubuntu:xenial

#LED blink program for Arduino 101
RUN mkdir -p /root/led-blink
COPY main.js package.json /root/led-blink/

#Script to take care of mraa dependencies
ADD install-script.sh /root/install-script.sh

ENV NODE_PATH=/usr/local/lib/node_modules/

EXPOSE 8080

CMD bash -C '/root/install-script.sh';'bash'

