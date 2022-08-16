var a = prompt('entre com o primeiro numero');
var b = prompt('entre com o segundo numero');

a = Number.parseInt(a);
b = Number.parseInt(b);

if ( Number.isNaN(a) || Number.isNaN(b) )
{
    alert('Digite somente numeros');
}

if (a < b)
{
    for (var i= a; i<=b; i++)
    {
    	console.log(i);
    }
}
else
{
    for (var i= a; i>= b; i--)
    {
    	console.log(i);
    }
}
