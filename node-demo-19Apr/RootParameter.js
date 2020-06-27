const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hii shilpi.")
})

app.get('/users/:id?',(req,res)=>{
    if(req.params.id === undefined)
    res.send('All users accessed..')
    else
    res.send('users accessed..'+req.params.id)
})

app.get('/flight/:from?.:to?',(req,res)=>{
    console.log(req.params)
    res.send('flight Search '+ req.params.from + " To " + req.params.to)
})




app.listen(3000,()=>{
    console.log("server is running on port 3000")
})