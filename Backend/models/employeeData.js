const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    employeename: String,
    employeeImage:String,
    employeeDesigination:String,
    employeeLocation:String,
    employeeSalary:String
})
const employeeData = mongoose.model("employeeDatas",employeeSchema)
module.exports = employeeData
