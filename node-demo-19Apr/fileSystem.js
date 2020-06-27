const fs  = require("fs");

fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log("data is:::",data)
})

console.log("file ended successfully ......")

//for deletion file

// fs.unlink(__dirname+"/hello.txt",(err,data)=>{
//     if(err) throw err;
//     console.log("file deleted.....",data)
// })


// run in browser with server

const http = require("http");

const server = http.createServer(function(req,res){
   
    fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{

        res.writeHead(200,{"Content-type":"text/plain"})
        res.write(data)
        res.end();
    })
}).listen(3000,()=>{
    console.log("Running server on port 3000")
})