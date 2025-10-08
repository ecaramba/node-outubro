
let nome = "Edir";

let nome1 = "Pedro";

nome = "Maria";

const idade = 34;

console.log(nome);

var cidade = ["Curitiba", "Pinhais", "Colombo"];


let fim = cidade.length - 1;

for (let ini = 0; ini <= fim; ini = ini + 1)
{
    //console.log(cidade[ini]);
}

// JSON

var aluno = "Pedro";
var turmas = ["ABC", "12B", "34A"];

let caneta = {

    // variavel -> propriedade -> atributo
    cor: "Azul",
    tinta: 100,

    // função -> metodo
    escrever()
    {

    }
};

console.log(caneta);

// encapsulamento
caneta.cor = "Preto";

caneta.escrever();

console.log(caneta);