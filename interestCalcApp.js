const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/interest/:p&:r&:t", (req,res) => {
    const p = parseInt(req.params.p);
    const r = parseInt(req.params.r);
    const t = parseInt(req.params.t);

    let interest = ( p * r * t )/100;

    res.json({
        "total": (p+interest),
        "interest": interest
    });
});

app.listen(3001);