// ------------------- WRITING A FILE ---------------------
/* Parameters
📝 path - This is the string having the file name including path.
📝 data - This is the String or Buffer to be written into the file
📝 options - The third parameter is an object which will hold {encoding, mode, flag}.
By default, encoding is utf8, mode is octal value 0666, and flag is 'w'
📝 callback - This is the callback function which gets a single parameter err that
returns an error in case of any writing error.

*/
//SYNTAX
//fs.writeFile(filename, data, options, callback)
var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', "utf-8",function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('input.txt', function (err, data) { //reading data of the file
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: --------------" + data.toString());
    });
});
