//--------------------------------- PIPING THE STREAM -----------------------------------------
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
