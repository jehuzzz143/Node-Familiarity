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