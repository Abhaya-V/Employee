import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {   useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import axiosInstance from '../axiosInterceptor';


const Employees = () => {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    axiosInstance.get("http://localhost:3000/employees").then((res)=>{
     setData(res.data)
    }).catch((err) =>{
      console.log(err)
    })
  },[])

  function update_val(item){
    navigate("/addemployees",{state:{item}})
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axiosInstance .delete(`http://localhost:3000/employees/delete/${id}`)
        .then((res) => {
          alert("Employee deleted successfully!");
          // Refresh the list
          setData(prevData => prevData.filter(emp => emp._id !== id));
        })
        .catch((err) => {
          console.error("Error deleting employee:", err);
        });
    }
  }
 
  return (
  <Grid container spacing={2} style={{margin:"3%"}}>
    {data.map((item)=>(
    <Grid size={4}>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 250 }}
      image={item.employeeImage}
      title="employee"
    />
    <CardContent>
    <Typography variant="h6" style={{textAlign:"center"}}>{item.employeename}</Typography>
    <Typography variant="subtitle1" style={{textAlign:"center"}} >{item.employeeDesigination}</Typography>
    <Typography variant="subtitle2" style={{textAlign:"center"}} >Location: {item.employeeLocation}</Typography>
    <Typography variant="subtitle2" style={{textAlign:"center"}} >Salary: {item.employeeSalary}</Typography>
    <Button variant="contained" style={{marginRight:"5%",textAlign:"center"}} onClick={()=>{
          update_val(item)
        }}>UPDATE</Button>
        <Button variant="contained" style={{textAlign:"center"}} onClick={() => handleDelete(item._id)}>DELETE</Button>
    
    </CardContent>
    
  </Card>
    </Grid>
    ))}
    </Grid>
    
   
  )
}

export default Employees
