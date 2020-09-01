var http= require('http')
http.createServer(function(req,response){
    response.writeHead(200);
    response.write("Hi this is hari")
    console.log("hey")
    response.end()

}).listen(8080);
console.log("listening")