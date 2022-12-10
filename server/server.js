import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT=4000
const app = express();
app.use(cors);
mongoose.set('strictQuery',true);
await mongoose.connect(
    "mongodb+srv://ntmtriet:Triet3402@mernproject.m0u1z2h.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log('MongoDB connection is succesful'));

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.listen(PORT,()=>{
    console.log('Server is running at http://localhost:4000');
}) 