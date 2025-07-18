import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Employees from './components/Employees'
import AddEmployees from './components/AddEmployees'
import Main from './components/Main'
import ViewEmployees from './components/ViewEmployees'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/employees' element={<Main child={<Employees/>}/>}/>
      <Route path='/addemployees' element={<Main child={<AddEmployees/>}/>}/>
      <Route path='/view' element={<ViewEmployees />}  />
    </Routes>
    </>
  )
}

export default App
