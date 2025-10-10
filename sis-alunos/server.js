
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Pagina inicial")
});

app.get("/listar", function(req, res){

    let arquivo = __dirname + "/alunos.csv";

    let tabela = "<table>"
        +"<tr>"
            +"<th>Month</th>"
            +"<th>Savings</th>"
        +"</tr>"
        +"<tr>"
            +"<td>January</td>"
            +"<td>$100</td>"
        +"</tr>"
        +"<tr>"
            +"<td>February</td>"
            +"<td>$80</td>"
        +"</tr>"
        +"</table>";
        res.send(tabela);

});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/front/contato.html");
});

app.listen(3000, function(){
    console.log("servidor iniciado")
});