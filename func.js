
// E -> P -> S

function soma(n1, n2)
{
    var valor = n1 + n2;
    return valor;
}

console.log( soma(2, 3) );

// func anonima
let mult = function (n1, n2)
{
    return n1 * n2;
}

console.log( mult(2, 3) );


function calc(n1, n2, op)
{
    let resultado = op(n1, n2);
    console.log(resultado);
}

calc(3, 5, soma);
calc(3, 5, mult);