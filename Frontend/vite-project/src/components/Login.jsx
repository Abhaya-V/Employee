import React, { useState } from 'react'
import { Box, Button,TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    email:"",
    password:""
  })
  function capValue(){
    axios.post("http://localhost:3000/users/login", form)
      .then(res => {
        const user = res.data.user;

        alert(res.data.message);
        if(res.data.token){
          sessionStorage.setItem("token",res.data.token)
          console.log("User role:", user.role); 
          if (user.role === "admin") {
            navigate("/employees");
          } else if (user.role === "user") {
            navigate("/view");
          } else {
            alert("Invalid user role");
          }
        }

        
      })
      .catch(err => {
        console.error("Login error:", err);
        alert("Invalid email or password");
      });
  
  }
  return (
    <div>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to left, rgb(26, 2, 2), rgb(24, 21, 21))",
      }}
    >
      <form
        style={{
            width: "100%", 
           
            maxWidth: 400,  
            borderRadius: 20,
            boxShadow: 3,
            background: "linear-gradient(to left, rgb(107, 104, 104), rgb(43, 41, 41))",
            padding: "30px",
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          LOGIN
        </Typography>

        <TextField fullWidth
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="outlined" margin="normal"
          onChange={(e)=>{
            setForm({...form,email:e.target.value})
          }}
        /> 
        <TextField fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          sx={{ mt: 2 }}
          onChange={(e)=>{
            setForm({...form,password:e.target.value})
          }}
        />
       
        <Button variant="contained"  fullWidth sx={{ mt: 2 ,borderRadius: 8}} onClick={capValue}>Login</Button>

        <Typography textAlign="center" mt={2} sx={{ cursor: "pointer", color: "blue" }}>
          Don't have an account? <Link to={"/signup"} style={{color:"blue"}}>Signup</Link> 
        </Typography>
      </form>
    </Box>
    </div>
  )
}

export default Login
