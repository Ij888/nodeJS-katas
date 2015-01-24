var http = require('http');
http.CreateServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log(/*output server message */);

/*
var http = require('http');
http.createServer(200, function(req, res))











*/