const express=require("express");
const zod=require("zod");
const jwt=require("jsonwebtoken")

const app=express();

app.use(express.json());


const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
    },
  ];

  function PushTOUsers(req, res){

    const temp={
        username:req.body.username,
        password:req.body.password
    }

    ALL_USERS.push(temp);
    console.log(temp)
    console.log(ALL_USERS)

  }


const schema=zod.object({
    username:zod.string(),
    password:zod.string().min(8)
})

function converit(username, req, res){
    const token = jwt.sign({username:username}, req.body.password);
    return res.json({
        token
    })

}

function middlewareCheck(req, res, next){
    const data=req.body;
    const zodresponse=schema.safeParse(data);
    if(!zodresponse){
        return res.status(404).json({
            msg:"Either username or password is wrong"
        })
    }
    else{
        next()
    }

}


app.post("/signin",middlewareCheck, function(req, res){
    PushTOUsers(req, res);
    const token=converit(req.body.username, req, res);   
})

app.get("/user", function(req, res){
    const data = req.headers.authorization;
    try{
        const response=jwt.verify(data, "ashutosh");
        const username=response.username
        res.json({
            ALL_USERS
        })

    }catch(err){
        return res.status(404).json({
            msg:"something went wrong"
        })
    }
})

console.log(ALL_USERS)
app.listen(3000);