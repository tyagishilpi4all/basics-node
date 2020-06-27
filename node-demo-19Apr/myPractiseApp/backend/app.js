const express = require('express');
const useRouter = require('./routes/userRoutes');

const app = express;

const {PORT} = require('./utils/config');

//app.use(express.static(''))

app.use('/',useRouter);

app.listen(PORT,()=>{
    console.log('server start ${PORT}')
})