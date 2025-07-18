import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(to right, rgb(48, 35, 35), rgb(90, 86, 86))',
          padding: '4px 0'
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Button color="inherit">
            <Link to="/" style={{ color: "white", textDecoration: "none" }} onClick={()=>{
            sessionStorage.removeItem("token")
          }}>
              Logout
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default UserNavbar;
