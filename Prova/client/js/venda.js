const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-corpo");
const atu = document.querySelector("#atu");
const updateData = document.querySelector("#updateData");
const updateQuantidade = document.querySelector("#updateQuantidade");

const select = document.querySelector("#select1");
const select2 = document.querySelector("#select2");

let produtoid = "";
  let vendedorid = "";

  

    select.addEventListener("change", (event) => {
    vendedorid = select.value;
  });
  
  select2.addEventListener("change", (event) => {
    produtoid = select2.value;
  });

fetch("http://localhost:3000/vendedor/read", { method: "GET" })
  .then((response) => response.json())
  .then((vendedores) => {
    vendedores.forEach((vendedor) => {
      const option = document.createElement("option");
      option.value = vendedor.idvendedor;
      option.textContent = vendedor.nome_vendedor;
      select.appendChild(option);
    });
  })
  .catch((error) => console.error(error));

  fetch("http://localhost:3000/produto/read", { method: "GET" })
  .then((response) => response.json())
  .then((produtos) => {
    produtos.forEach((produto) => {
      const option2 = document.createElement("option");
      option2.value = produto.idproduto;
      option2.textContent = produto.nome_produto;
      select2.appendChild(option2);
    });
  })
  .catch((error) => console.error(error));

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
    let col5 = document.createElement("td");
    let col7 = document.createElement("td");

    let button = document.createElement("button");
    let del = document.createElement("button");

    col1.innerHTML = formatarData(e.data_venda);
    col2.innerHTML = e.quantidade;
    col3.innerHTML = e.nome_vendedor;
    col5.innerHTML = e.nome_produto;
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
    linha.appendChild(col5);
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
    produtoid: produtoid,
    vendedorid: vendedorid,
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
