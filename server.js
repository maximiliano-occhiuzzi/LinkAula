//importamos la libreria de express
const express = require("express");
require("./mqtt");

//crea la aplicacion 
const app = express();

app.get("/", (req,res) => {
    res.send("Hola Maximiliano 😎");
});

app.listen(3000, () => {
    console.log("servidor run");
});

