const http = require("http");

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"})
    res.write("<h1>Node js server Demo...</h1>");
    res.end();
}).listen(3000,()=>console.log("Server running on port 3000"))