Ubuntu docker image for Intel Gateway + Arduino 101 with MRAA

How to Run:
----------
docker run -ti --device=/dev/ttyACM0 huzefank/gateway-mraa

It will take some time (~3 mins on a core i7 gateway and ~10 mins on an Atom gateway)
to install all the dependencies. Once on the prompt test the setup using a led-blink
program to blink a LED on Arduino 101 board.

cd /root/led-blink
node main.js

Note: If the Gateway has WR Linux installed this should just work, if it has Ubuntu
installed the Modem manager might be holding up the ttyACM0 port for which it has to
be disabled (check running services and stop Modem service using ttyACM0 port)

If upm libraries are required, they can be installed with command
npm install upm -g

Any additional UPM libraries (for e.g. LCD can be installed separately as required)
npm install jsupm_i2clcd -g

