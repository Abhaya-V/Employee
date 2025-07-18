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

const PORT = process.env.PORT|| 3000
app.listen(PORT,()=>{
    console.log(`Server is running in Port ${PORT}`)
})







