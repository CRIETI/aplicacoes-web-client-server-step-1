var partes = [ ];

var parte1  = {
    nome : "Sala principal"
}

parte1.mesas = criarMesa(30,"P");

var parte2  = {
    nome : "Sala lado"
}

parte2.mesas = criarMesa(6,"M");

var parte3  = {
    nome : "Sala 2"
}

parte3.mesas = criarMesa(30,"P");

partes.push(parte1);
partes.push(parte2);
partes.push(parte3);

console.log(partes);

function criarMesa(quantidade, tamanho)
{
    var mesas = [];

    for (var i= 1; i<=quantidade; i++)
    {
        var mesa = {posicao:i};
        mesa.tamanho = tamanho;
        mesas.push(mesa);
    }

    return mesas;
}