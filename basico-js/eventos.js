ativarCaixas();

function ativarCaixas()
{
    var caixas = document.querySelectorAll(".caixa:not(.ativada)");

    for (var i = 0; i < caixas.length; i++)
    {
        var caixa = caixas[i];
        caixa.classList.add("ativada");
        caixa.addEventListener("mouseover", entrarCaixa);
        caixa.addEventListener("mouseout", sairCaixa);
        caixa.addEventListener("click", clicarCaixa);
        caixa.addEventListener("dblclick", removerCaixa);
    }
}

function entrarCaixa()
{
    this.classList.remove('clicado');
    this.classList.add('entrado');
    this.innerHTML = "Entrado";
}

function sairCaixa()
{
    this.classList.remove('clicado');
    this.classList.remove('entrado');
    this.innerHTML = "";
}

function clicarCaixa()
{
    this.classList.add('clicado');
    this.innerHTML = "Clicado";
}

function addCaixa()
{
    var caixa = document.createElement("div");
    caixa.classList.add("caixa");

    document.body.appendChild(caixa);

    ativarCaixas();
}

function removerCaixa()
{
    this.remove();
    //document.body.removeChild(this);
}