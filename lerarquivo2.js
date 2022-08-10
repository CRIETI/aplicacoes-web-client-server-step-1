const fs = require("fs");

async function main()
{
    console.log("antes");

    let content = await fs.promises.readFile("conteudo.txt", "utf-8");
    console.log(content);
    
    console.log("depois");
    return content;
}

main();

console.log("finaleira")