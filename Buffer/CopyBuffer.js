// ---------------------------------- COPY BUFFERS  ----------------------------------
//SYNTAX ------ buf.copy(targetBuffer, targetStart, sourceStart, sourceEnd)
/* PARAMETERS
📝 targetBuffer - Buffer object where buffer will be copied.
📝 targetStart - Number, Optional, Default: 0
📝 sourceStart - Number, Optional, Default: 0
📝 sourceEnd - Number, Optional, Default: buffer.length
*/

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
//outputs: buffer2 content: ABC