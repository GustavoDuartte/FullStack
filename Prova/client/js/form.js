const registerQuant = document.querySelector("#registerQuant");
const registerData = document.querySelector("#registerData");
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

function registrar() {
  let data = {
    data_venda: registerData.value,
    quantidade: registerQuant.value,
    produtoid: produtoid,
    vendedorid: vendedorid,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/venda/create", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info != undefined) {
        window.location.href = "../pages/venda.html";
      } else {
        alert(info.msg);
      }
    });
}
