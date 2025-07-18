import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import UserNavbar from './UserNavbar'; 
import axiosInstance from '../axiosInterceptor';

const ViewEmployees = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("http://localhost:3000/employees")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <UserNavbar/>
    <Grid container spacing={2} style={{ margin: "3%" }}>
      {data.map((item) => (
        <Grid size={4} key={item._id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={item.employeeImage}
              title="employee"
            />
            <CardContent>
              <Typography variant="h6" align="center">{item.employeename}</Typography>
              <Typography variant="subtitle1" align="center">{item.employeeDesigination}</Typography>
              <Typography variant="subtitle2" align="center">Location: {item.employeeLocation}</Typography>
              <Typography variant="subtitle2" align="center">Salary: {item.employeeSalary}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default ViewEmployees;
