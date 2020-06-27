const express = require('express');
const app = express();

app.use(express.static('public'));

//app.use('/abc',express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'./index.html')
})

// app.get('/',(req,res)=>{
//     res.send("Hello world.....")
// });

app.get('/users/profile',(req ,res)=>{
    res.send("users profile accessed......")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000..")
})