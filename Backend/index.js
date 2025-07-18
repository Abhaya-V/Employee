const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(morgan("dev"))
const cors = require("cors")
app.use(cors());
app.use(express.json());
require("dotenv").config()
require("./db/connection")



const employeeRoutes = require("./Routes/employeeRoutes");
const userRoutes = require("./Routes/userRoutes");
app.use("/employees", employeeRoutes);
app.use("/users", userRoutes);

const path = require('path');

// Serve static files from React
app.use(express.static(path.join(__dirname, '../Frontend/vite-project/dist')));

// Serve index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/vite-project/dist', 'index.html'));
});
const PORT = process.env.PORT|| 3000
app.listen(PORT,()=>{
    console.log(`Server is running in Port ${PORT}`)
})







