/*
Node.js console is a global object and is used to print different levels of messages to
stdout and stderr. There are built-in methods to be used for printing informational,
warning, and error messages.
*/
// user https://matfuvit.github.io/UVIT/predavanja/literatura/TutorialsPoint%20node.js.pdf yung 
// referrence page 77
console.info("Program Started");
var counter = 10;
console.log("Counter: %d", counter);
console.time("Getting data");
//
// Do some processing here...
//
console.timeEnd('Getting data');
console.info("Program Ended")
