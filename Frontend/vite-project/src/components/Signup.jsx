import React, { useState } from 'react'
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  
  });

  const handleSignup = () => {
    axios.post("http://localhost:3000/users/signup", form)
      .then((res) => {
        alert("Signup successful!");
        navigate("/"); 
      })
      .catch((err) => {
        console.log(err);
        alert("Signup failed!");
      });
  };

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
            boxShadow: "3px 3px 10px rgba(255,255,255,0.2)",
            background: "linear-gradient(to left, rgb(126, 124, 124), rgb(43, 41, 41))",
            padding: "30px",
            margin: 10,
          }}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
            SIGN UP
          </Typography>

          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mt: 2 }}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <TextField
            fullWidth
            label="Phone Number"
            type="tel"
            variant="outlined"
            sx={{ mt: 2 }}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

         

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, borderRadius: 8 }}
            onClick={handleSignup}
          >
            Signup
          </Button>

          <Typography textAlign="center" mt={2} sx={{ color: "blue" }}>
            Already have an account? <Link to={"/"} style={{ color: "blue" }}>Login</Link>
          </Typography>
        </form>
      </Box>
    </div>
  )
}

export default Signup;
