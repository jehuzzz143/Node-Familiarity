

//1. Require module
var http = require("http");
var express = require('express');

//2. Create Server
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //reading the external file
    var fs = require("fs");
    var data = fs.readFileSync('input.txt');
  
    
    // Send the response body as "Hello World"
    response.end(data.toString());
   }).listen(8081);

   // Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
