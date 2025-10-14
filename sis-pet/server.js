// backend
/*

Fullstack
- backend
- frontend
- database

MVC

M -> Model -> Database
V -> View -> Frontend
C -> Controller -> Backend

CRUD

Create -> Cadastro
Read -> Listando
Update -> Alterando
Delete -> Apagar

*/

const express = require("express");
const app = express();

// listagem de todos
app.get("/", function(req, res){
    res.sendFile(__dirname + "/frontend/index.html");
});

// cadastro
app.post("/agenda", function(req, res){
    res.send("foi");
});


// atualização
app.post("/agenda/atualizar", function(req, res){
    res.send("foi");
});

// deletar
app.post("/agenda/deletar", function(req, res){
    res.send("foi");
});

app.listen(3000, function(){
    console.log("O servidor iniciado");
})