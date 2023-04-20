const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-corpo");
const atu = document.querySelector("#atu");
const updateNome = document.querySelector("#updateNome");
const updateMatricula = document.querySelector("#updateMatricula");

fetch("http://localhost:3000/vendedor/read", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => {
    montarTabela(resp);
  })
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let button = document.createElement("button");
    let del = document.createElement("button");

    col1.innerHTML = e.nome_vendedor;
    col2.innerHTML = e.matricula;
    col3.innerHTML = e.id;
    button.innerHTML = "Editar";
    del.innerHTML = "Excluir";

    button.setAttribute("type", "button");
    button.setAttribute("data-mdb-toggle", "modal");
    button.setAttribute("data-mdb-target", "#exampleModal");
    button.className = "btn btn-primary";
    atu.setAttribute("onclick", `atualizar('${e.matricula}')`);
    

    del.className = "btn btn-primary";
    del.setAttribute("onclick", `excluirItem('${e.id}')`);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col4);
    col4.appendChild(button);
    col4.appendChild(del);

    corpo.appendChild(linha);
  });
}

function excluirItem(id) {
  if (confirm("Excluido"))
    fetch("http://localhost:3000/vendedor/delete/" + id, { method: "DELETE" })
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 204) window.location.reload();
        else alert("Erro ao enviar dados");
      });
}

function atualizar(matricula) {
  const body = {
    nome_vendedor: updateNome.value,
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };

  options.body = JSON.stringify(body);

  fetch("http://localhost:3000/vendedor/update/" + matricula, options)
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp == 201) window.location.reload();
      else alert("Erro ao enviar dados");
    });
}
