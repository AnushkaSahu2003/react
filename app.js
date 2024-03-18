require("dotenv").config({path:" ./.env"})
const express = require("express");
const app = express();
require("./models/dbconfig").dbconnection();

const userRouter = require("./routes/userroute");


app.use(require("morgan")("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/user",(userRouter))

// app.all( "*",(req.res.next) => {
//     res.status(404).json({
//         success:false,
//         message:`${req.url}route not found`,

//     })
// })

app.listen(process.env.PORT,()=>{
    console.log(`the server is running on port ${process.env.PORT}`);
})