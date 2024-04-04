const express= require("express")
const zod = require("zod")
const app=express()

//const users=["ashu", "rohan", "dheeraj"]

app.use(express.json())
const schema=zod.string()
const schema2=zod.string().email()
const schema3=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})


app.post("/username", function(req, res){
    // const kidney = req.body.kidney
    // const response=schema.safeParse(kidney);

    const extract=req.body
    const response=schema3.safeParse(extract);

    //console.log("found kidney")
    res.send(response.success);
});


//global chaches
app.use(function(err, req, res, next){
    res.json({
        "msg":"Sorry something is up with this server"
    })
})

app.listen(4000)