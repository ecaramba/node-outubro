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
Update -> Alterando -> UPDATE
Delete -> Apagar -> DELETE

DBMS -> gerenciador de BD

SQL -> Relacional -> Estruturado


*/

const express = require("express");
const app = express();
const exssession = require("express-session")

app.use(exssession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('frontend'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const sqlite = require("sqlite3");

const db = new sqlite.Database('sis-pet.db');


// pagina inicial
app.get("/", function(req, res){

    if (!req.session.logado) {
        res.redirect("/login");
    } else {
        res.sendFile(__dirname + "/frontend/lista.html");
    }
});

app.get("/login", function(req, res){
    console.log(req.session)
    res.sendFile(__dirname + "/frontend/login.html");

});

app.get("/logout", function(req,res){
    req.session.destroy();
    res.redirect("/login");
});

app.post("/login", function(req, res){

    // let email = req.body.email;
    // let senha = req.body.senha;
    let {email, senha} = req.body

    let sql = `SELECT * FROM usuario WHERE email = ? AND senha = ?`;

    db.get(sql, [email, senha], function(erro, retorno){

        if (retorno == null)
        {
            res.json('senha incorreta')
        } else {

            req.session.logado = true;

            res.redirect("/");
        }
        
    });

    
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

});

app.get("/agenda/:id", function(req, res){

    let id = req.params["id"]
    let sql = "SELECT * FROM agenda WHERE id = ?";
    
    db.get(sql, [id], function(erro, agenda){
        
        if (erro != null) {
            res.status(500);
            res.json(erro);    
        } 

        if (!agenda)
        {
            res.status(404).send("");
        } 
        
        res.json(agenda);
        

    });

});

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
app.post("/agenda/atualizar/:id", function(req, res){

    let id = req.params["id"];
    let dados = req.body;

    let sql = `UPDATE agenda
        SET nome = ?, tutor = ?, datahora = ?, profissional = ?, servico = ?, valor = ?
        WHERE id = ?`;
    
        db.run(sql, [
        dados.nome, 
        dados.tutor, 
        dados.datahora, 
        dados.profissional,
        dados.servico,
        dados.valor,
        id
        ], function(erro){

        if (erro != null) {
            res.status(500);
            res.json(sql);
        } else {
            res.status(200);
            res.json(this)
        }
    });
});

// deletar
app.post("/agenda/deletar/:id", function(req, res){
    let id = req.params["id"]
    let sql = "DELETE  FROM agenda WHERE id = ?";

    db.run(sql, [id], function(erro){
        if (erro != null) {
            res.status(500);
            res.json(erro);
        } else {
            res.status(200);
            res.json(this)
        }
    });

});

app.listen(3000, function(){
    console.log("O servidor iniciado");
})