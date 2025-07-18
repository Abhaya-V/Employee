const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const User = require("../models/userData");


router.post("/signup", async (req, res) => {
    try {
      const { name, email, password, phone } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      // Create new user with default role
      const newUser = new User({ name, email, password, phone });
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            res.status(404).send("user not found")
        }
        else{
            if(user.password == req.body.password){
                const payload = {email:user.email,password:user.password}
                const token = jwt.sign(payload,"employeeApp")
                const userObj = user.toObject();
                res.status(200).send({message:"login successfull",user: userObj,token:token})
            }
            else{
                res.status(404).send({message:"Invalid"})
            }
        }
    } catch (error) {
        res.status(400).send("error")
    }
  });


  
module.exports = router;