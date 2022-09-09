// ------------------- TRUNCATE A FILE ---------------------
/* The fs.ftruncate() method is used to change the size of the file i.e. either increase 
or decrease the file size. It changes the length of the file at the path by len bytes. 
If len is shorter than the file’s current length, the file is truncated to that length. 
If it is greater than the file length, it is padded by appending null bytes (x00) until 
len is reached.*/
/* Parameters
📝 fd - This is the file descriptor returned by fs.open().
📝 len - This is the length of the file after which the file will be truncated.
        The default value is 0, which means that the whole file would be truncated.
📝 callback - This is the callback function. No arguments other than a possible
exception are given to the completion callback.
*/
// SYNTAX  ------------------ fs.ftruncate(fd, len, callback)
var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to truncate the file after 10 bytes");

    // Truncate the opened file.
    fs.ftruncate(fd, 10, function(err){
        if (err){
            console.log(err);
        }
        console.log("File truncated successfully.");
        console.log("Going to read the same file");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }
            // Print only read bytes to avoid junk.
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }
            // Close the opened file.
            fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
                console.log("File closed successfully.");
            });
        });
    });
});
