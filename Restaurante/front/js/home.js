const uri = "http://localhost:3000/selectrestaurante";
const corpo = document.querySelector("#corpo");

fetch(uri + "atendimentos", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");

    let del = document.createElement("button");
    del.innerHTML = "<i class='fas fa-trash'></i>";
    del.setAttribute("onclick", `excluirItem('${e.id}')`);

    del.className = "btn-delete";

    col1.innerHTML = formatarData(e.data);
    col2.innerHTML = e.medico_nome;
    col3.innerHTML = e.paciente_nome;
    col4.appendChild(del);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col4);

    corpo.appendChild(linha);
  });
}