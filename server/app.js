const express=require("express")

const app=express()

const port=4000;

require('./db/conn')

const router=require('./routes/router')

const cors=require('cors')
// app.get("/",(req,res)=>{
//     res.json("server created")
// })
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(port ,()=>{
    console.log(`server start at port no ${port}`)
})