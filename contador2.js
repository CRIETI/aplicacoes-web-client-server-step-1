function calcularContador()
{
    const result = document.querySelector(".result");
    result.innerHTML = "";
    
    const a = Number.parseInt(document.querySelector("#numeroA").value);
    const b = Number.parseInt(document.querySelector("#numeroB").value);

    if ( Number.isNaN(a) || Number.isNaN(b) )
    {
        alert('Digite somente numeros');
    }

    if (a < b)
    {
        for (let i= a; i<=b; i++)
        {
            escreverLinha(i);
        }
    }
    else
    {
        for (let i= a; i>= b; i--)
        {
           escreverLinha(i);
        }
    }
}

function escreverLinha(numero)
{
    const result = document.querySelector(".result");
    const linha = document.createElement("div");
    linha.innerHTML = numero;
    result.appendChild(linha);
}