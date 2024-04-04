const mongoose = require("mongoose")
const express=require("express")
const app=express()

app.use(express.json());
mongoose.connect("mongodb+srv://admin:Ashutosh%405068651@test.veydhxy.mongodb.net/users_app")

const User = mongoose.model('Users', {name: String, email: String, password: String});



app.post("/sigin",async function(req, res){
    const username=req.body.username
    const password=req.body.password
    const email=req.body.email
    

    const isUser = await User.findOne({email:email})
    if(isUser){
        return res.status(404).json({
            "msg":"user already exist"
        })
    }
    else{
        const user = new User({ 
            username: username,
            email:email,
            password:password, 
        });

        user.save()

        return res.json({
            "msg":"New user has been created"
        })
    }
})

app.listen(3000);