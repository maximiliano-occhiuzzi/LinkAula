//importamos la libreria de express
const express = require("express");

//crea la aplicacion 
const app = express();

app.get("/", (req,res) => {
    res.send("servidor found");
});

app.listen(3000, () => {
    console.log("servidor run");
});

