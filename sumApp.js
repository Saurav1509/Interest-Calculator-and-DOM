const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/sum/:a&:b", (req,res) => {
    const num1 = parseInt(req.params.a);
    const num2 = parseInt(req.params.b);

    let sum = num1 + num2;

    res.send(sum.toString());
});

app.listen(3000);