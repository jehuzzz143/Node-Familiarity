// ------------------- OPEN A FILE ---------------------
/* Parameters
📝 path - This is the string having file name including path.
📝 flags - Flags indicate the behavior of the file to be opened. [ r, r+,rs,w,wx]
📝 mode - It sets the file mode (permission and sticky bits), but only if the file was
created. It defaults to 0666, readable and writeable.
📝 callback - This is the callback function which gets two arguments (err, fd).
*/

// fact 
// Create a new, empty file using the open() method with flag 'w'


var fs = require("fs");
// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('newInput.txt', 'w', function(err, fd) { //create new empty file
 if (err) {
 return console.error(err);
 }

 console.log("File opened successfully!");
});

/* 
Flag Description
r    Open file for reading. An exception occurs if the file does not exist.
r+   Open file for reading and writing. An exception occurs if the file does not exist.
rs   Open file for reading in synchronous mode.
rs+  Open file for reading and writing, asking the OS to open it synchronously. See
     notes for 'rs' about using this with caution.
w    Open file for writing. The file is created (if it does not exist) or truncated (if it
exists).
wx  Like 'w' but fails if the path exists.
w+  Open file for reading and writing. The file is created (if it does not exist) or
truncated (if it exists).
wx+ Like 'w+' but fails if the path exists.
a   Open file for appending. The file is created if it does not exist.
ax  Like 'a' but fails if the path exists.
a+  Open file for reading and appending. The file is created if it does not exist.
ax+ Like 'a+' but fails if the path exists.
*/