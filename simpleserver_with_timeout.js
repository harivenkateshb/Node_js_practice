var http=require("http")
http.createServer(function(req,res){
res.writeHead(200)
res.write("Dog is running")
setTimeout(() => {
    res.write("Dog is resting")
    res.end()
}, 10000);
}).listen("8080")
console.log("Listening")