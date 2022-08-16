const fs = require("fs");

async function main()
{
    let content = await fs.promises.readFile("conteudo.json", "utf-8");
    console.log(content);

    let produtos = JSON.parse(content);

    let novoProduto = {};
    novoProduto.nome = "Mesa";
    novoProduto.valor = 200;

    produtos.push(novoProduto);

    let novoConteudo = JSON.stringify(produtos);

    fs.writeFile("conteudo.json",novoConteudo,trataErroLeitura);

    return content;
}

function trataErroLeitura(erro)
{
    console.log('rodo');
}

main();