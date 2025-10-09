
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Pagina inicial")
});

app.get("/contato", function(req, res){
    console.log( req.accepts("lalala") )
    res.send("<h1>Pagina de contato</h1>");
});

app.listen(3000, function(){
    console.log("servidor iniciado")
});