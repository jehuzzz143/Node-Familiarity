//------------------------------ CONCATENATE BUFFERS ------------------------------------
// SYNTAX ------------- Buffer.concat(list, totalLength)
/* Parameters 
📝List - required array of buffer object
📝totalLength - optional total length of buffer when concatenated
*/
var buffer1 = new Buffer('Jehu ');
var buffer2 = new Buffer('Ombrog');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("My Fullname is: " + buffer3.toString());
// outputs: My fullname is: Jehu Ombrog