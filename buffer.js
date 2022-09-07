// 9 BUFFERS
/* Pure JavaScript is Unicode friendly, but it is not so for binary data. 
While dealing with TCP streams or the file system, it's necessary to handle octet streams. 
Node provides Bufferclass which provides instances to store raw data similar to an array of integers 
["jehu"] = [74,69,88,85] in Anscii utf-8 binary but
corresponds to a raw memory allocation outside the V8 heap. */

//CREATING BUFFERS                  --------------------------------------------------

//Following is the syntax to create an uninitiated Buffer of 10 octets:
var buf = new Buffer(10);
//Following is the syntax to create a Buffer from a given array:
var buf = new Buffer([10, 20, 30, 40, 50]);
//Following is the syntax to create a Buffer from a given string and optionally encoding type:
var buf = new Buffer("Simply Easy Learning", "utf-8");
//Though "utf8" is the default encoding, you can use any of the following encodings "ascii","utf8", "utf16le", "ucs2", "base64" or "hex".

//WRITING BUFFERS                   -------------------------------------------------
buf.write(string, offset, length, encoding)

//REDING BUFFERS                    -------------------------------------------------
buf.toString(encoding, start, end)

/* 
👀string - required string data to be written in buffer
👀offset - optional index of the buffer to start writing at. default value is 0
👀length - optional this is the number of bytes to write. default is buffer.length
👀encoding - optional Encoding to use. the default is utf-8 
*/
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
 buf[i] = i + 97;
}
console.log( buf.toString('ascii'));
// outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));
// outputs: abcde
console.log( buf.toString('utf8',0,5));
// outputs: abcde
console.log( buf.toString(undefined,0,5));
// encoding defaults to 'utf8', outputs abcde


//  BUFFERS  LENGTH                -------------------------------------------------
//getiing the length of the buffer
buf.length;

var buffer = new Buffer('TutorialsPoint');
//length of the buffer
console.log("buffer length: " + buffer.length);
//ouputs: buffer length: 14

// BUFFERS TO JSON                    -------------------------------------------------
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

// outputs: [ 83, 105, 109, 112, 108, 121, 32, 69, 97, 115, 121, 32, 76, 101, 97, 114, 110,105, 110, 103 ]

// CONCATENATE BUFFERS                   -------------------------------------------------
Buffer.concat(list, totalLength)
/* 
👀List - required array of buffer object
👀totalLength - optional total length of buffer when concatenated
*/
var buffer1 = new Buffer('Jehu ');
var buffer2 = new Buffer('Ombrog');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("My Fullname is: " + buffer3.toString());
// outputs: My fullname is: Jehu Ombrog

// COMPARE BUFFERS                   -------------------------------------------------
//Check if two buffer objects are equal:
buf.compare(otherBuffer);

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if(result < 0) {
 console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
 console.log(buffer1 +" is same as " + buffer2);
}else {
 console.log(buffer1 +" comes after " + buffer2);
}
// outpus: ABC comes before ABCD

// COPY BUFFERS                   -------------------------------------------------
buf.copy(targetBuffer, targetStart, sourceStart, sourceEnd)
/* 
👀 targetBuffer - Buffer object where buffer will be copied.
👀 targetStart - Number, Optional, Default: 0
👀 sourceStart - Number, Optional, Default: 0
👀 sourceEnd - Number, Optional, Default: buffer.length
*/

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
//outputs: buffer2 content: ABC

// SPLICE BUFFERS                   -------------------------------------------------
// slice the string into a given starting and end point
buf.slice(start, end)
/* 
👀 start -  Number, Optional, Default: 0
👀 end - Number, Optional, Default: buf.length
*/
var buffer1 = new Buffer('TutorialsPoint');

var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());
//outputs: buffer2 content: Tutorials



// for referrence read more in page 42 https://matfuvit.github.io/UVIT/predavanja/literatura/TutorialsPoint%20node.js.pdf