//CREATING BUFFERS                  --------------------------------------------------

//Following is the syntax to create an uninitiated Buffer of 10 octets:
var buf = new Buffer(10);
//Following is the syntax to create a Buffer from a given array:
var buf = new Buffer([10, 20, 30, 40, 50]);
//Following is the syntax to create a Buffer from a given string and optionally encoding type:
var buf = new Buffer("Simply Easy Learning", "utf-8");
//Though "utf8" is the default encoding, you can use any of the following encodings "ascii","utf8", "utf16le", "ucs2", "base64" or "hex".
