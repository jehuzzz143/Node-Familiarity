// REPEATEDLY DISPLAY THE OUTPUT WITH TIME INTERVAL DELAY
//  A timer cannot span more than 24.8 days.
/*
The setInterval(cb, ms) global function is used to run callback cb repeatedly after at
least ms milliseconds.
*/

function printHello(){
    console.log( "Hello, World!");
   }
   // Now call above function after 2 seconds
   setInterval(printHello, 2000);

// Now clear the interval or override the timer
//var t =   setInterval(printHello, 2000);
// clearInterval(t);

