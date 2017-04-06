var m = require("mraa") ;
console.log('MRAA version: ' + m.getVersion());

m.addSubplatform(m.GENERIC_FIRMATA, "/dev/ttyACM0");

var io = new m.Gpio(525);

io.dir(m.DIR_OUT);                  // configure the LED gpio as an output

console.log("Using LED pin number: " + 13) ;


// now we are going to flash the LED by toggling it at a periodic interval

var ledState ;
var periodicActivity = function() {
    ledState = io.read() ;                  // get the current state of the LED pin
    io.write(ledState?0:1) ;                // if the pin is currently 1 write a '0' (low) else write a '1' (high)
    process.stdout.write(ledState?'0':'1') ;    // and write an unending stream of toggling 1/0's to the console
} ;
var intervalID = setInterval(periodicActivity, 1000) ;  // start the periodic toggle

