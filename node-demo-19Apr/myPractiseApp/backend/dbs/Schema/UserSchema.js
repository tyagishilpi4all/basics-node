
var employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalHour:Number,
    total:Number
})

var employeeModal = mongoose.model('employee',employeeSchema)

module.exports=employeeModal;
