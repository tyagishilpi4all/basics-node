const express = require("express");
const app = express();

var MiddleWareIs = require('./middleware.js')

var myMiddleWare = function(req,res,next){
    console.log("Middleware is working...")
    next();
}

var userValidation = function(req,res,next){
    console.log(req.params.username)
     if(req.params.username =='shilpi'){
        console.log("user is shilpi here...")
     }
     else{
        console.log("all user accessed...") 
     }
 
    next();
}
//app.use(myMiddleWare)
app.use(MiddleWareIs({option1 : '1' , option2:'2'}))

app.get('/',myMiddleWare,(req,res)=>{
    res.send("Hello shilpi...")
})

app.get('/users/:username',userValidation,(req,res)=>{
    res.send("user is here...")
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})