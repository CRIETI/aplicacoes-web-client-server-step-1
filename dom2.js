var aula3 = document.querySelector("#aula-3");

console.log(aula3);
aula3.innerHTML = "<small>Aula 3</small>";
aula3.style.backgroundColor = "red";

var links = document.querySelectorAll("a.link");

for ( var i=0; i<links.length; i++)
{
    var a = links[i];
    a.href="https://www.univates.br";
    console.log(a);
}

console.log(links);