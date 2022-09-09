/* 
Every method in the fs module has synchronous as well as asynchronous forms
Asynchronous methods take the last parameter as the completion function callback and
the first parameter of the callback function as error. 
*/
var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {  //err = error { data = completion of function callback}
 if (err) {
 return console.error(err);
 }
 console.log("Asynchronous read: " + data.toString());
});
// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
// ouputs: 
/* 
Synchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended
Asynchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

nag load muna yung asynchronous then continue kaya nauna mag display ang synchronous 
*/