// ---------------------------- SPLICE BUFFERS -------------------------------------
// slice the string into a given starting and end point
//SYNTAX --------- buf.slice(start, end)
/* PARAMETERS
📝 start -  Number, Optional, Default: 0
📝 end - Number, Optional, Default: buf.length
*/
var buffer1 = new Buffer('TutorialsPoint');

var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());
//outputs: buffer2 content: Tutorials
