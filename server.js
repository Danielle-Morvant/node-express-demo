const { default: chalk } = require("chalk");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <pre>list of route servers
               /multiply
               /divide
               /subtract
               /Baby Food Purees</pre>
               </html>`)
});

app.get("/multiply", function (req, res) {
    let a = 25;
    let b = 4;
    let c = 25*4
    console.log(c)
    res.send("<h1>Let's Do The Math By The Multitudes!" + c + "</h1>");
});

app.get("/divide", function (req, res) {
    let m = 500;
    let n = 50;
    let o = m/n
    res.send("<h1>Let's Do The Math Without Dividing The House!" + o + "</h1>");
});

app.get("/subtract", function (req, res) {
    q=100;
    r=100;
    z=q-r;
    res.send("<h1>Let's Do The Math If It Takes All We Have!" + z + "</h1>");
});

app.get("/Baby Food Purees" , function (req, res) {
    let foodPurees = ["apple", "pear", "plum", "carrot", "swet potato"];
    let index = Math.floor(Math.random()*4)
    res.send("My baby loves when I make" + foodPurees[index] + "baby food");
});

app.listen(PORT, () => {
    console.log(chalk.bgYellow("It's Alive!!!"))
})
