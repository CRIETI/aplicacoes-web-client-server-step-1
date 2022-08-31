const express = require("express");
const bp = require('body-parser');
const path = require('path');
const fs = require("fs");
const Mensagem = require("./model/mensagem.js");

const app = express();
const port = 3002;

app.use(bp.urlencoded({ extended: true }))
app.use('/static', express.static(__dirname+"/static/"));
app.set("view engine", "ejs")

app.get("/", function (req, res)
{
    res.sendFile(path.join(__dirname, '/form.html'));
});

app.use("/form", async function(req, res)
{
    let content = await fs.promises.readFile("mensagens.json","utf-8");

    let mensagens = JSON.parse(content);
    let nome = req.body.nome;
    let email = req.body.email;
    let msg = req.body.msg;
    let resultado = {nome: nome, email:email, msg: msg};
    console.log(resultado); 

    mensagens.push(resultado);

    fs.writeFile("mensagens.json", JSON.stringify(mensagens),
    function(data)
    {
        console.log("arquivo gravado");
    });

    let mensagem = Mensagem.create( resultado );

    //res.send("<script>alert('Feito!')</script>");
    //res.send("<h1> Mensagem recebida</h1> Olá, "+resultado.nome+". <br/> Aguarde retorno da empresa.");

    res.render("result", resultado);
});

app.listen(port, () =>
{
    console.log("Rodando http://localhost:"+port);
});