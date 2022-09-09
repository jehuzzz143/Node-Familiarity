// ------------------- DELETE A FILE ---------------------
/* Parameters
📝 path - This is the file name including path.
📝 callback - This is the callback function. No arguments other than a possible
exception are given to the completion callback.
*/

// SYNTAX  ------------------ fs.unlink(path, callback)
var fs = require("fs");
console.log("Going to delete an existing file");
fs.unlink('newInput1.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});

//before executing this Execute first the OpenFiles.js so that the newInput1.txt will be 
//created, by then, you can now run this js to delete the file.
