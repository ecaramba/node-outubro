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

CRUD -> DB

Create -> Cadastro -> INSERT
Read -> Listando -> SELECT
Update -> Alterando
Delete -> Apagar

DBMS -> gerenciador de BD

SQL -> Relacional -> Estruturado


*/

const express = require("express");
const app = express();

app.use(express.static('frontend'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const sqlite = require("sqlite3");

const db = new sqlite.Database('sis-pet.db');


// pagina inicial
app.get("/", function(req, res){
    res.sendFile(__dirname + "/frontend/index.html");
});

// app.get("/:nome.js", function(req, res){
//     let nome = req.params["nome"]
//     res.sendFile(__dirname + "/frontend/"+ nome +".js");
// });

// listagem de todas agendas
app.get("/agenda", function(req, res){

    let sql = "SELECT * FROM agenda";

    db.all(sql, function(err, dados){
        res.json(dados)

    });

})

// cadastro
app.post("/agenda", function(req, res){
    let dados = req.body;

    let sql = `INSERT INTO agenda ( nome, tutor, datahora, profissional, servico, valor)
            VALUES (?, ?, ?, ?, ?, ?)`;
    
    
    db.run(sql, [dados.nome, 
        dados.tutor, 
        dados.datahora, 
        dados.profissional,
        dados.servico,
        dados.valor
        ], function(erro){

        if (erro != null) {
            res.status(500);
            res.json(sql);
        } else {
            res.status(201);
            res.json(this)
        }
    });

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