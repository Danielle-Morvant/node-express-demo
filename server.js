const { Console } = require("console");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <pre>list of route servers
               /multiply
               /divide
               /subtract</pre>
               </html>`)
});

app.get("/multiply", function (req, res) {
    let a = 25;
    let b = 4;
    output = 25*4
    console.log(output)
    res.send("<h1>Let's Do The Math By The Multitudes! + output</h1>");
});

app.get("/divide", function (req, res) {
    res.send("<h1>Let's Do The Math Without Dividing The House!</h1>");
});

app.get("/subtract", function (req, res) {
    res.send("<h1>Let's Do The Math !</h1>");
});

app.listen(PORT, () => {
    console.log("It's Alive!!!")
})