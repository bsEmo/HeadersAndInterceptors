const express = require('express');
const uuid = require('uuid/v4');

const app = express();

app.get("/", (req, res) => {
    console.log("/");
    res.setHeader("NextToken", uuid());
    //res.status(401).json({ auth: false });
    res.send("Hello World!");
});

app.listen(8901);