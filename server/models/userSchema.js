const mongoose= require("mongoose");
const bcrypt=require("bcryptjs")
// const validator=require("validator")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,    
    },
    password:{
        type:String,
        required:true,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }

    ]

})
userSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,12)
    next()
})

const userdb=new mongoose.model("users",userSchema)
module.exports=userdb