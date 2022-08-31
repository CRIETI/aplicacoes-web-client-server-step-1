const express = require("express");
const fetch = require("node-fetch");
const bp = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bp.urlencoded({ extended: true }))
app.use(express.static(__dirname+"/assets/"));
app.set("view engine", "ejs");

app.get("/", async function (req, res) 
{
    const apiUrl = 'https://brasilapi.com.br/api/feriados/v1/2022';
		
    const response = await fetch(apiUrl);
    const feriados = await response.json();
    //console.log(result);
    
    res.render("feriado", {feriados:feriados});
});

app.listen(port, () => 
{
    console.log(`Rodando em http://localhost:${port}`)
})