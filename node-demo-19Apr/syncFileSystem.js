const fs = require("fs");

try{
    const data = fs.readFileSync(__dirname+"/hello.txt","utf8");
    console.log(data)
}
catch(e){
    console.log(e)
}

console.log("file ended successfully.......")