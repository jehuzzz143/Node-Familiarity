//-------------------------------- BUFFERS TO JSON  ---------------------------
//SYNTAX ---- buf.toJSON(buffer)

/* 
JavaScript Object Notation (JSON) is a standard text-based format for representing 
structured data based on JavaScript object syntax
*/
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

//OUTPUTS: [ 83, 105, 109, 112, 108, 121, 32, 69, 97, 115, 121, 32, 76, 101, 97, 114, 110,105, 110, 103 ]
