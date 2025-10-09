
// modulo proprio
var calc = require("./func");

console.log( calc.mult(4, 3) );

// modulo interno do node
const fs = require("fs");

let valor = "Outra linha\n";
let opc = {
    flag: 'a'
};

console.log("antes");
fs.writeFile("teste.txt", valor, opc, function(){
    console.log("dentro");
    console.log("terminou");
});
console.log("depois");

fs.readFile("teste.txt", "utf8", function(erro, texto) {
    console.log(erro, texto);
})

// modulo externo do node
const csv = require("csv");

