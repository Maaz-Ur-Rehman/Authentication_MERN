const express=require('express')
const router=new express.Router()
const userdb=require('../models/userSchema')
const bcrypt = require('bcryptjs');

router.post("/register", async (req, res) => {

    const { fname, email, password } = req.body;

    if (!fname || !email || !password ) {
        res.json({ 
            messege: "fill all the details",
            status:false
         })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.json({ 
                messege: "This Email is Already Exist",
                status:false
            })
        } else {
            const finalUser = new userdb({
                fname, email, password
            });


            const storeData = await finalUser.save();

            // console.log(storeData);
            res.json({ status: 201, storeData })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
   
module.exports=router