const { Console } = require("console");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
    res.send("<pre>Baby's First Homemade Purees</pre>");
});

app.listen(PORT, ( ) => {
    console.log("It's Alive!!!")
})