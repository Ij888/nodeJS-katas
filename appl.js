var http = require('http');
var server = http.CreateServer(function (req, res){
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("BufferStream");
    res.end();
})

server.listen(3000);
