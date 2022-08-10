const fs = require("fs");

let produtos = [];

let produto1 = {};
produto1.nome = "Bola quadrada";
produto1.valor = 16.90;

let produto2 = {};
produto2.nome = "Bola rodanda";
produto2.valor = 29.90;

produtos.push(produto1);
produtos.push(produto2);

let meuConteudo = JSON.stringify(produtos);

fs.writeFile("conteudo.json", meuConteudo, function (error)
{
    if ( error )
    {
        throw error;
    }

    console.log("arquivo gravado com sucesso!");
});

console.log(meuConteudo)