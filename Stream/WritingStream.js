//------------------------------ WRITING TO A STREAM --------------------------------------------
// it simply input a data into a stream object 
var fs = require("fs");
var data1 = '----Simply Easy Learning----';
// Create a writable stream   // create a new object ouput.txt if there's no ouput object yet
var writerStream = fs.createWriteStream('output.txt');
// Write the data to stream with encoding to be utf8
writerStream.write(data1,'UTF8');
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error
writerStream.on('finish', function() {
 //displaying the data from ouput.txt
    console.log("Write completed.");
 var data = '';
 var readerStream = fs.createReadStream('output.txt');
    readerStream.setEncoding('UTF8');
    readerStream.on('data', function(chunk) {
    data += chunk;
  
   });
   readerStream.on('end',function(){
    //the ouput is : ----Simply Easy Learning----
    //console.log(data);
   });


});
writerStream.on('error', function(err){
    console.log(err.stack);
});
    console.log("WRITING : Program Ended");

/* As you can see ouput.txt doesnt display correct data ---Simply Easy Learning--- because its overwritten by
Piping Stream which it copies the input.txt file
*/
