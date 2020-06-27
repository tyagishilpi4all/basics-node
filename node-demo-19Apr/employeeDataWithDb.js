var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee',{useUnifiedTopology:true})

var conn = mongoose.connection;
var employeeschema = new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalHour:Number,
    total:Number
});

employeeschema.methods.totalSalary=function(){
    return this.hourlyrate * this.totalHour;
}

var employeeModal = mongoose.model('employee',employeeschema);

var employees = new employeeModal({
    name:"Anjali",
    email:"anjalig@gmail.com",
    etype:'hourly',
    hourlyrate:50,
    totalHour:16
})

employees.total = employees.totalSalary();

//console.log("...",employees)

conn.on("connected",function(){
    console.log("connected Successfully...")
})

conn.on("disconnected",function(){
    console.log("disconnected successfully...")
})

conn.on('error',console.error.bind(
    console, "connection error:"
));

conn.once('open',function(){
    // employees.save(function(err,res){
    //     if(err) throw error
    //     console.log(res)
    //     conn.close();
    // })
})

// employeeModal.findOneAndUpdate({name:"shilpi tyagi"},{name:"shilpa tyagi"},function(err,data){
//     if(err) throw error;
//     console.log(data)
//     conn.close();
// })

employeeModal.find({name : "shilpa tyagi"},function(err,data){
    if(err) throw error;
    console.log(data);
    conn.close();
})

// employeeModal.findOneAndRemove({name:"shilpa tyagi"},function(err,data){
//     if(err) throw error;
//     console.log(data)
//     conn.close();
// })