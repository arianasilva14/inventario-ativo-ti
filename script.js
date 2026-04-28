let ativos=
JSON.parse(
localStorage.getItem("ativos")
)||[];

function salvar(){
localStorage.setItem(
"ativos",
JSON.stringify(ativos)
);
}

function cadastrarAtivo(){

const equipamento=
document.getElementById("equipamento").value;

const usuario=
document.getElementById("usuario").value;

const status=
document.getElementById("status").value;

const ativo={
id:Date.now(),
equipamento,
usuario,
status
};

ativos.push(ativo);

salvar();

listarAtivos();

}

function listarAtivos(){

const lista=
document.getElementById("listaAtivos");

lista.innerHTML="";

ativos.forEach(a=>{

lista.innerHTML += `
<div class="card">

<strong>${a.equipamento}</strong><br>

Responsável: ${a.usuario}<br>

Status: ${a.status}<br>

<button onclick="alterarStatus(${a.id})">
Alterar Status

salvar();
</button>

</div>
`;

});

}

function alterarStatus(id){

ativos=ativos.map(a=>{

if(a.id===id){

if(a.status==="Em uso")
a.status="Manutenção";

else if(a.status==="Manutenção")
a.status="Disponível";

}

return a;

});

listarAtivos();

}

listarAtivos();