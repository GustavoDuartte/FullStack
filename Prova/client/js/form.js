const registerQuant = document.querySelector("#registerQuant");
const registerData = document.querySelector("#registerData");
const registerVend = document.querySelector("#registerVend");
const registerProd = document.querySelector("#registerProd");
const select = document.querySelector("select");

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

const vendedores = [];

function vendedor(vetor) {
  vetor.forEach((e) => {
    for (let i = 0; i < vendedores.lenght; i++) {
      let lin = document.createElement("option");
      lin.innerHTML = e.nome_vendedor;
      select.appendChild(lin);
    }
  });
}

function registrar() {
  let data = {
    data_venda: registerData.value,
    quantidade: registerQuant.value,
    produtoid: registerVend.value,
    vendedorid: registerProd.value,
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
        window.location.href = "../pages/index.html";
      } else {
        alert(info.msg);
      }
    });
}
