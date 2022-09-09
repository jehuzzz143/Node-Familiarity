// ------------------- WRITING BUFFER ---------------------
/* Parameters
📝 string - This is the string data to be written to buffer.
📝 offset - This is the index of the buffer to start writing at. Default value is 0
📝 length - This is the number of bytes to write. Defaults to buffer.length.
📝 encoding - Encoding to use. 'utf8' is the default encoding.
*/

//SYNTAXX
// ------------- buf.write(string, offset, length, encoding)

buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+ len);

//OUPUTS:Octets written : 20