var par = function(numero)
{
    return numero %2 == 0;
}

function outraFuncao()
{
    console.log('outraFuncao2');
}

var resultado = par(4);
console.log(resultado);
console.log(typeof par);
console.log(typeof 4);