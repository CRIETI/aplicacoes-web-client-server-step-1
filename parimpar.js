var numero = Number(prompt("Entre com um numero"));
var parOuImpar = prompt("Somar par ou impar? (p ou i)");
var validado = true;

if (Number.isNaN(numero))
{
    validado = false;
    alert("Digite um numero!");
}

if ( !(parOuImpar == "p" || parOuImpar == "i"))
{
    validado = false;
    alert("Somente p ou i");
}

if (validado)
{
    var soma = 0;

    for (var i =1 ; i<=numero; i++)
    {
        var resultado = par(i);
        //console.log(i+"="+resultado);

        if (parOuImpar == "p" && resultado)
        {
            soma = soma+i;
        }
        else if ( parOuImpar == "i" && !resultado )
        {
            soma = soma + i;
        }
    }
    
    console.log(soma);
}

function par(numero)
{
    return (numero % 2) == 0
}