
const express = require("express");
const csv = require("csv/sync");
const fs = require("fs");

const app = express();

app.get("/", function(req, res){
    res.send("Pagina inicial")
});

app.get("/listar", function(req, res){

    fs.readFile(__dirname + "/alunos.csv", "utf8", function(err, arquivo){
        let dados = csv.parse(arquivo);
        // matriz multidimensional
        console.log(dados);
        let tabela = "<table>"
            +"<tr>"
                +"<th>Nome</th>"
                +"<th>Cidade</th>"
                +"<th>Telefone</th>"
            +"</tr>";

        for (let lin = 1; lin < dados.length; lin += 1 )
        {
            tabela +=
            "<tr>"
                +"<td>"+ dados[lin][0] +"</td>"
                +"<td>"+ dados[lin][1] +"</td>"
                +"<td>"+ dados[lin][2] +"</td>"
            +"</tr>"
        }
        
        tabela += "</table>";

        res.send(tabela);
    });
    

});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/front/contato.html");
});

app.listen(3000, function(){
    console.log("servidor iniciado")
});