var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name : String,
    email : String,
    etype : String,
    hourlyrate : Number,
    totalHour : Number
})

employeeSchema.methods.totalSalary = function(){
    console.log('Total Income of %s: Rs. %d',this.name , this.hourlyrate*this.totalHour)
}

var employeeModal = mongoose.model('employee',employeeSchema);

var employees = new employeeModal({
    name : "shilpi tyagi",
    email : 'tyagishilpi86@gmail.com',
    etype : 'hourly',
    hourlyrate : 100,
    totalHour : 24
})

 employees.totalSalary();
//console.log('Total Income of %s: Rs. %d',employees.name , employees.hourlyrate*employees.totalHour)