
function criarCidades()
{
    var estados = [];

    var rs = {
        sigla: "RS",
        nome: "Rio grande do Sul",
        populacao: 109480430,
        cidades: [
            {
                codigoIbge : 4304390,
                nome: "Lajeado",
                populacao: 82343
            }
            ,
            {
                codigoIbge : 4304656,
                nome: "Estrela",
                populacao: 50409
            }
        ]
    }

    var sc = {
        sigla: "SC",
        nome: "Santa Catarina",
        populacao: 9989097
    }

    var pr = {
        sigla: "PR",
        nome: "Parana",
        populacao: 432423432
    }

    estados.push(rs);
    estados.push(sc);
    estados.push(pr);

    return estados;
}

function desenharCidades()
{
    var estados = criarCidades();
    var result = document.querySelector(".result");

    for ( var i=0; i<estados.length; i++)
    {
        var estado = estados[i];

        var table = document.createElement('table');

        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = estado.sigla + " - " + estado.nome;
        
        tr.appendChild(td);
        table.appendChild(tr);
        table.style.border = "solid 1px black";

        var cidades = estado.cidades;

        if (typeof cidades == "object" )
        {
            for (var y=0; y < cidades.length; y++)
            {
                var cidade = cidades[y];

                var tr2 = document.createElement("tr");
                var td2 = document.createElement("td");
                td2.innerHTML = cidade.nome + " - " + cidade.codigoIbge;
        
                tr2.appendChild(td2);
                table.appendChild(tr2);
                console.log(cidade);
            }
        }

        result.append(table);
    }

}