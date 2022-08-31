const express = require("express");
const bp = require('body-parser');
const path = require('path');
const app = express();
const port = 3001;

app.use(bp.urlencoded({ extended: true }))
app.use(express.static(__dirname+"/assets/"));

app.get("/", function (req, res) 
{
    res.sendFile(path.join(__dirname, '/form.html'));
});

app.use("/form", function (req, res) 
{
    console.log(req.query);
    console.log(req.body);
    var nome = req.body.nome;
    var email = req.body.email;
    var msg = req.body.msg;
    var resposta = { nome: nome, email: email, msg: msg };

    console.log("Resposta formulário: ", resposta);

    res.send("<h1>Conteudo maneiro feito pelo " + req.body.nome+"</h1>");

    //res.redirect("/");
});

app.listen(port, () => 
{
    console.log(`Rodando em http://localhost:${port}`)
})