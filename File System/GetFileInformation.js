// ------------------- GET FILE INFORMATION ---------------------
/* Parameters
📝 path - This is the string having file name including path.
📝 callback - This is the callback function which gets two arguments (err, stats)
where stats is an object of fs.Stats type

fs.stat(path, callback)

*/

var fs = require("fs");
console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
 if (err) {
 return console.error(err);
 }
 console.log(stats);
 console.log("Got file info successfully!");

 // Check file type
 console.log("isFile ? " + stats.isFile());
 console.log("isDirectory ? " + stats.isDirectory());
});




/* 
METHODS                   DESCRIPTION
stats.isFile()            Returns true if file type of a simple file.
stats.isDirectory()       Returns true if file type of a directory.
stats.isBlockDevice()     Returns true if file type of a block device.
stats.isCharacterDevice() Returns true if file type of a character device.
stats.isSymbolicLink()    Returns true if file type of a symbolic link.
stats.isFIFO()            Returns true if file type of a FIFO.
stats.isSocket()          Returns true if file type of a socket.
*/