
const express = require("express");

const app = express();

app.get("/contato", function(req, res){
    res.send("Pagina de contato");
});

app.listen(3000, function(){
    console.log("servidor iniciado")
});