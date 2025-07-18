import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'

const AddEmployees = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    employeename: "",
    employeeImage:"",
    employeeDesigination:"",
    employeeLocation:"",
    employeeSalary:""
  })

  const location = useLocation()
      useEffect(()=>{
        if(location.state!= null){
          setForm({...form,employeename:location.state.item.employeename,
            employeeImage:location.state.item.employeeImage,
            employeeDesigination:location.state.item.employeeDesigination,
            employeeLocation:location.state.item.employeeLocation,
            employeeSalary:location.state.item.employeeSalary,
          })
        }else{
          setForm({...form,
            employeename: "",
            employeeImage:"",
            employeeDesigination:"",
            employeeLocation:"",
            employeeSalary:""
          })
        }
      },[])
      function capValue(){
        if(location.state!=null){
            axiosInstance.put("http://localhost:3000/employees/update/"+location.state.item._id,form).then((res)=>{
              alert("updated successfully")
              navigate("/employees")
            }).catch((error)=>{
              console.log(error)
            })
        }else{
          axiosInstance.post("http://localhost:3000/employees/add",form).then((res) =>{
            alert("Employee added",res.data)
             navigate("/employees")
            }).catch((err) =>{
              console.log(err)
            })
        }
      
      }
 

  return (
    <div>
      <Container maxWidth="sm">
            <Box sx={{ mt: 3, p: 3,  width: "100%",
                  maxWidth: 500,
                  borderRadius: 5,
                  boxShadow: "3px 3px 10px rgba(255, 255, 255, 0.36)",
                  background: "linear-gradient(to left, rgb(126, 124, 124), rgb(68, 66, 66))",
                  padding: "30px",
                  }}>
                <Typography variant="h4" textAlign="center" color='white' >
                    Add New Employee
                </Typography>
                
                <TextField fullWidth label="Employee Name" variant="outlined" margin="normal"  value={form.employeename} onChange={(e)=>{
                setForm({...form,employeename:e.target.value})
                }} />


                <TextField fullWidth label="Employee Image" variant="outlined" margin="normal" value={form.employeeImage} onChange={(e)=>{
                setForm({...form,employeeImage:e.target.value})
                }}  />

               
               
                <TextField fullWidth label="Employee Desigination" variant="outlined" margin="normal" value={form.employeeDesigination}  onChange={(e)=>{
                setForm({...form,employeeDesigination:e.target.value})
                }}  />
                <TextField fullWidth label="Employee Location" variant="outlined" margin="normal" value={form.employeeLocation}  onChange={(e)=>{
                setForm({...form,employeeLocation:e.target.value})
                }}  />
                <TextField fullWidth label="Employee Salary" variant="outlined" margin="normal"  value={form.employeeSalary}  onChange={(e)=>{
                setForm({...form, employeeSalary:e.target.value})
                }} />

                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}  onClick={capValue}>
                    Add Employee
                </Button>
            </Box>
        </Container>
    </div>
  )
}

export default AddEmployees
