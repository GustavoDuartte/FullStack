const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-corpo");
const atu = document.querySelector("#atu");
const updateData = document.querySelector("#updateData");
const updateQuantidade = document.querySelector("#updateQuantidade");
const updateProduto = document.querySelector("#updateProdutoid");
const updateVendedor = document.querySelector("#updateVendedorid");

fetch("http://localhost:3000/venda/readVenda", { method: "GET" })
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
    let col5 = document.createElement("td");
    let col6 = document.createElement("td");
    let col7 = document.createElement("td");

    let button = document.createElement("button");
    let del = document.createElement("button");

    col1.innerHTML = formatarData(e.data_venda);
    col2.innerHTML = e.quantidade;
    col3.innerHTML = e.nome_vendedor;
    col4.innerHTML = e.idvendedor;
    col5.innerHTML = e.nome_produto;
    col6.innerHTML = e.idproduto;
    button.innerHTML = "Editar";
    del.innerHTML = "Excluir";

    button.setAttribute("type", "button");
    button.setAttribute("data-mdb-toggle", "modal");
    button.setAttribute("data-mdb-target", "#exampleModal");
    button.className = "btn btn-primary";

    atu.setAttribute("onclick", `atualizar('${e.idvenda}')`);

    del.className = "btn btn-primary";
    del.setAttribute("onclick", `excluirItem('${e.idvenda}')`);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col4);
    linha.appendChild(col5);
    linha.appendChild(col6);
    linha.appendChild(col7);
    col7.appendChild(button);
    col7.appendChild(del);

    corpo.appendChild(linha);
  });
}

function excluirItem(idvenda) {
  if (confirm("Excluido"))
    fetch("http://localhost:3000/venda/delete/" + idvenda, { method: "DELETE" })
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 204) window.location.reload();
        else alert("Erro ao enviar dados");
      });
}

function atualizar(idvenda) {
  const body = {
    data_venda: updateData.value,
    quantidade: updateQuantidade.value,
    produtoid: updateProduto.value,
    vendedorid: updateVendedor.value,
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };

  options.body = JSON.stringify(body);

  fetch("http://localhost:3000/venda/update/" + idvenda, options)
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp == 201) window.location.reload();
      else alert("Erro ao enviar dados");
    });
}

function formatarData(dataava) {
  return new Date(dataava).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
