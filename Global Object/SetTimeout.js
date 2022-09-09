//----------------------------  SET DELAY ---------------------
// A timer cannot span more than 24.8 days.
/*
    cb - callback
    ms - milliseconds
 */
function printHello(){
    console.log( "Hello, World!");
    }
    // Now call above function after 2 seconds delay

    setTimeout(printHello, 2000); 
// Now clear the timer or override the timer
//var t =setTimeout(printHello, 2000); 
// clearTimeout(t);
