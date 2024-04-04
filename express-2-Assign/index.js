const express=require("express")
const fs = require("fs")

const app=express();

//const PORT=3000;

app.get("/files/:fileName", function(req, res){
    const name = req.params.fileName;
    console.log(name);
    let temp="";
    fs.readFile(name, "utf-8" ,function(err, data)
    {
        console.log(data);
        res.json({
            data
        });
       
    })
    
});

app.listen(3000, ()=>{
    console.log("listening")
})


// mongodb+srv://ashutoshg479:<password>@cluster0.rfbqown.mongodb.net/
//fKZU7Lt5IAjk4luY
// postgresql://test_owner:aFgxR7t3XcMP@ep-small-fog-a5sgixhq.us-east-2.aws.neon.tech/test?sslmode=require