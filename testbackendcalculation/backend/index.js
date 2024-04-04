const express = require("express");
const cors = require("cors");
const app = express();

// Allow requests only from specific origin
// const corsOptions = {
//     origin: "http://127.0.0.1:5500",
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.use(cors({origin: "http://127.0.0.1:5500"}));

app.use(express.json());

app.get("/calculate", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;
    res.json({
        "sum": sum
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
