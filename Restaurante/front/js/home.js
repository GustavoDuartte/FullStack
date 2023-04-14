const url = "http://localhost:3000";
const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-corpo");
const nomeRest = document.querySelector(".modal-title");
const avals = document.querySelector(".modal-corpo-aval");
const registerData = document.querySelector("#registerData");
const registerNota = document.querySelector("#registerNota");
const registerDesc = document.querySelector("#registerDesc");
const registerClid = document.querySelector("#registerClid");
const registerResid = document.querySelector("#registerResid");
let query = document.querySelector("#query");

query.addEventListener("change", () => {
  let uri = "";

  if (query.value == "") {
    uri = "/selectallrestaurante";
  } else {
    uri = "/selectrestaurante?cat=";
  }

  fetch(url + uri + query.value, { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) => {
      corpo.innerHTML = "";

      montarTabela(resp);
    })
    .catch((err) => console.error(err));
});

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col4 = document.createElement("td");
    let button = document.createElement("button");

    col1.innerHTML = e.nome;
    col2.innerHTML = e.nomecat;
    button.innerHTML = "info";

    button.setAttribute("type", "button");
    button.setAttribute("data-mdb-toggle", "modal");
    button.setAttribute("data-mdb-target", "#myModal");
    button.setAttribute("onclick", `getNomeRest('${e.nome}')`);

    button.className = "btn btn-primary";

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col4);
    col4.appendChild(button);

    corpo.appendChild(linha);
  });
}

function getNomeRest(nome) {
  fetch(url + "/informacoesrest?nome=" + nome, { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) => {
      modal.innerHTML = "";
      getRestInfo(resp);
    })
    .catch((err) => console.error(err));

  fetch(url + "/informacoesAval?nome=" + nome, { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) => {
      avals.innerHTML = "";
      getAval(resp);
    })
    .catch((err) => console.error(err));
}

function getRestInfo(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let col5 = document.createElement("td");
    let col6 = document.createElement("td");
    let col7 = document.createElement("td");
    let col8 = document.createElement("td");
    let col9 = document.createElement("td");

    col1.innerHTML = e.nome;
    col2.innerHTML = e.rua;
    col3.innerHTML = e.numero;
    col4.innerHTML = e.bairro;
    col5.innerHTML = e.cidade;
    col6.innerHTML = e.estado;
    col7.innerHTML = e.complemento;
    col8.innerHTML = e.descricao;
    col9.innerHTML = formatarMoeda(e.valor);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col4);
    linha.appendChild(col5);
    linha.appendChild(col6);
    linha.appendChild(col7);
    linha.appendChild(col8);
    linha.appendChild(col9);

    nomeRest.innerHTML = e.nome;

    modal.appendChild(linha);
  });
}

function getAval(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    col1.innerHTML = e.nota;
    col2.innerHTML = formatarData(e.dataava);
    col3.innerHTML = e.descricaoava;

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);

    avals.appendChild(linha);
  });
}

function cadastrarAval() {
  let data = {
    restauranteid: registerResid.value,
    clienteid: registerClid.value,
    dataava: registerData.value,
    nota: registerNota.value,
    descricaoava: registerDesc.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/avaliacao/add", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
    });
}

function formatarData(dataava) {
  return new Date(dataava).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
