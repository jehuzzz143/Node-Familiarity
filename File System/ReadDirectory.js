// ------------------- READ DIRECTORY ---------------------
/* Parameters
📝 path - This is the directory name including path.
📝 callback - This is the callback function which gets two arguments (err, files) where
files is an array of the names of the files in the directory excluding '.' and '..'.
*/
//SYNTAX ------------------------ fs.readdir(path, callback)
var fs = require("fs");
console.log("Going to read directory /tmp");
fs.readdir("../File System",function(err, files){ //the parameter can accept file with space
    if (err) {
    return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});

//it will list down the file in the directory