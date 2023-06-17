const express=require("express");
const app=express();
const quotes=require("./quote.json");
const userRouter = require('./routes/UserRoutes');
const noteRouter = require("./routes/noteRoutes");
const mongoose=require("mongoose")
const dotenv=require("dotenv");
const cors=require("cors");


dotenv.config();

app.use(express.json())//it converts the expess body result to json 

app.use(cors());


app.use("/users",userRouter),//Middle ware
app.use("/note",noteRouter);//MiddleWare

const PORT=process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Notes Api from Swarup Wasnik")
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
app.listen(PORT,()=>{
    console.log("server Started on port no 5000" + PORT);
});
})
.catch((err)=>{
console.log(err);
})







app.listen(5300,()=>{
    console.log("hello how are you ");
})