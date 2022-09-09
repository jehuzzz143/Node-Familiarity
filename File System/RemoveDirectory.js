// ------------------- REMOVE DIRECTORY ---------------------
/* Parameters
📝 path - This is the directory name including path.
📝 callback - This is the callback function. No arguments other than a possible
exception are given to the completion callback.
*/
//SYNTAX -------------------- fs.rmdir(path, callback)
var fs = require("fs");
console.log("Going to delete directory /Test Directory");
fs.rmdir("../File System/testDirectory",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Going to read directory File System directory"); //it will show the files without the testDirectory
    fs.readdir("../File System",function(err, files){
        if (err) {
            return console.error(err);
        }
            files.forEach( function (file){
            console.log( file );
        });
    });
});


//Before executing this rune first the  CreateDirectory.js to make sure that the file
// were going to delete is existing
