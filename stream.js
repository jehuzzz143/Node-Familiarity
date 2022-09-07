//WHAT ARE THE STREAMS [objects]

/* Streams are objects that let you read data from a source or write data to a destination in
continuous fashion. */

/* 
In Node.js, there are four types of streams: 
📝 Readable - Stream which is used for read operation.
📝 Writable - Stream which is used for write operation.
📝 Duplex - Stream which can be used for both read and write operation.
📝 Transform - A type of duplex stream where the output is computed based on input.
*/

/* 
Each type of Stream is an EventEmitter instance and throws several events at different
instance of times. For example, some of the commonly used events are:
*/

/* 
📝 data - This event is fired when there is data is available to read
📝 end - This event is fired when there is no more data to read.
📝 error - This event is fired when there is any error receiving or writing data.
📝 finish - This event is fired when all the data has been flushed to underlying system.
*/

//READING STREAM       -----------------------------------------------------------------
var fs = require("fs");
var data = '';
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');
// Set the encoding to be utf8
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
 data += chunk;
});
readerStream.on('end',function(){
 console.log(data);
});
readerStream.on('error', function(err){
 console.log(err.stack);
});
console.log("READING : Program Ended");

/* 
Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!

program end first printed because the eventEmitter are still running the block of codes while 
it ended that was the time that it prints the data inside the txt file
*/

//WRITING TO A STREAM       -----------------------------------------------------------------
// it simply input a data into a stream object 
var fs = require("fs");
var data1 = '----Simply Easy Learning----';
// Create a writable stream   // create a new object ouput.txt if there's no ouput object yet
var writerStream = fs.createWriteStream('output.txt');
// Write the data to stream with encoding to be utf8
writerStream.write(data1,'UTF8');
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error
writerStream.on('finish', function() {
 //displaying the data from ouput.txt
 console.log("Write completed.");
 var data = '';
 var readerStream = fs.createReadStream('output.txt');
    readerStream.setEncoding('UTF8');
    readerStream.on('data', function(chunk) {
    data += chunk;
  
   });
   readerStream.on('end',function(){
    //the ouput is : ----Simply Easy Learning----
    //console.log(data);
   });


});
writerStream.on('error', function(err){
 console.log(err.stack);
});
console.log("WRITING : Program Ended");

/* As you can see ouput.txt doesnt display correct data ---Simply Easy Learning--- because its overwritten by
Piping Stream which it copies the input.txt file
*/

//PIPING THE STREAM       -----------------------------------------------------------------
// passing the stream data into another stream object
var fs = require("fs");
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);
console.log("PIPING : Program Ended");

// the ouput.txt will be the same as the input.txt because it pass the value to another object

//CHAINING STREAM       -----------------------------------------------------------------
/* It's like a compressing and decompressing mechanism of the stream objects.
its create new stream object which is the compressed file*/
// its like you chain the stream object into another stream object.
// it's a combination with pipe because we need to pass the data of the object into the another
// stream file obect insite the compressed file

//----------COMPRESSING -------------//
var fs = require("fs");
var zlib = require('zlib');
// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
 .pipe(zlib.createGzip())
 .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");

//----------DECOMPRESSING -------------//
// var fs = require("fs");
// var zlib = require('zlib');
// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
 .pipe(zlib.createGunzip())
 .pipe(fs.createWriteStream('input_v1.txt'));

console.log("File Decompressed.");




