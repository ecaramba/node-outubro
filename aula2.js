
var nome = "Edir"; // texto ->  string
var idade = 23; // numero ->  number -> integer
var peso = 34.7; // number -> float
var acordado = true; //booleano -> bool

// JS é linguagem dinamica e fracamente tipado

//nome = 123;
console.log(nome);


/*
>  maior
<  menor
>= maior ou igual
<= menoir ou igual
== igual
!= direfente
*/

idade = 70;
// 20 -> maior
// 12 -> menor
// 70 -> idoso

if (idade >= 65) 
{
    console.log("É idoso")
} else if ( idade >= 18 )
{
    console.log("Maior de idade");
} else 
{
    console.log("É menor de idade")
}


// estrutura de dados
// vetores -> array
var cidade = ["Curitiba", "Pinhais", "Colombo"];

console.log(cidade);

cidade.push("Maringa");

cidade.sort();
cidade.pop();

var ini = 0;
var fim = cidade.length - 1;

while ( ini <= fim )
{
    console.log(cidade[ ini ]);

    ini = ini + 1;
}

