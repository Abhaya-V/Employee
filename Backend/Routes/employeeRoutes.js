const express = require("express");
const router = express.Router();
const employeeData = require("../models/employeeData");
const jwt = require("jsonwebtoken")
router.use(express.json())
router.use(express.urlencoded({extended:true}))

function verifytoken(req,res,next){
  const token = req.headers.token
  try{
    if (!token) throw "Unauthorized access"
    const payload = jwt.verify(token,"employeeApp")
    if(!payload) throw "Unauthorized access"
    next()
  }catch(error){
    res.status(404).send(error)
  }
}
router.post("/add", verifytoken,async (req, res) => {
    try {
      const newEmployee = new employeeData(req.body);
      await newEmployee.save();
      res.status(201).json({ message: "Employee added successfully", employee: newEmployee });
    } catch (error) {
      res.status(500).json({ error: "Failed to add employee" });
    }
  });

  router.get("/", verifytoken,async (req, res) => {
    try {
      const employees = await employeeData.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch employees" });
    }
  });
   
  router.put("/update/:id",verifytoken, async (req, res) => {
    try {
      const updated = await employeeData.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: "Employee updated", updated });
    } catch (error) {
      res.status(500).json({ error: "Failed to update employee" });
    }
  });

  router.delete("/delete/:id",verifytoken, async (req, res) => {
    try {
      await employeeData.findByIdAndDelete(req.params.id);
      res.json({ message: "Employee deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete employee" });
    }
  });

  module.exports = router;