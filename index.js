const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { travelRouter } = require("./router/travel.routes");
const app = express();
app.use(express.json())
app.use(cors())

app.use("/travel",travelRouter)

app.listen(8000,async()=>{
    try {
         await connection;
         console.log("Db is connected") 
    } catch (error) {
        console.log(error)
    }
  
    console.log("server is running")
})