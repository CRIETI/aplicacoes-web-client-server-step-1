var numero = prompt('Informe um número');

numero = Number(numero);

if ( Number.isNaN(numero) )
{
    alert('Digite um numero');
}
else
{
    for (var i = 1; i <= 10; i++)
    {
        var resultado = numero * i;

        console.log(numero+"x"+i+"="+resultado);
    }
}