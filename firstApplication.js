// FIRST APPLICATION
/* 
1. Import required modules: We use the require directive to load Node.js
modules.
2. Create server: A server which will listen to client's requests similar to Apache
HTTP Server.
3. Read request and return response: The server created in an earlier step will
read the HTTP request made by the client which can be a browser or a console and
return the response
*/

//Step 1 - Import Required Module
var http = require("http");
//Step 2-Create Server
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
   
    // Send the response body as "Hello World"
    response.end('Hello World\n');
   }).listen(8081);
   
console.log('Server running at http://127.0.0.1:8081/');

//Step 3-Testing Request & Response
//execute in terminal
// $ node main.js
