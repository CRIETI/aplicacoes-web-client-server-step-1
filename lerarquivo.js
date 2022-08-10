const fs = require("fs");

console.log("antes");

fs.readFile("conteudo.txt", "utf-8", function(error, data){

    if ( error)
    {
        throw error;
    }

    console.log(data);

});

console.log("depois");