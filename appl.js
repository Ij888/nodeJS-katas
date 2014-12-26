var http = require('http');
var server = http.CreateServer(function (req, res){
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("BufferStream");
    res.end();
}).listen(1337, '127.0.0.1');
console.log(/*output server message */);