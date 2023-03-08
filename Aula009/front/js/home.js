const pNome = document.querySelector("#nome");
const card = document.querySelector(".card");
const main = document.querySelector("main");

function logoff() {
  localStorage.removeItem("corretor");

  window.location.href = "../index.html";
}

function carregar() {
  let dadosCorretor = JSON.parse(localStorage.getItem("corretor"));

  pNome.innerHTML = dadosCorretor.nome;

  main.innerHTML = "";

  carregarImoveis(dadosCorretor.id);
}

function carregarImoveis(id) {
  fetch(`http://localhost:3000/imoveis/corretor/${id}`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      data.forEach((imovel) => {
        criarCard(imovel);
      });
    });
}

function criarCard(imovel) {
  let nCard = card.cloneNode(true);

  nCard.classList.remove("model");

  nCard.querySelector("#codigo").innerHTML = imovel.codigo;
  nCard.querySelector("#endereco").innerHTML = imovel.endereco;

  nCard.querySelector("#venda").innerHTML = formatarMoeda(imovel.venda);
  nCard.querySelector("#aluguel").innerHTML = formatarMoeda(imovel.aluguel);

  nCard.querySelector("#status").innerHTML = imovel.nome;

  let btVenda = nCard.querySelector("#btVenda");
  let btAluga = nCard.querySelector("#btAluga");
  let btDisponivel = nCard.querySelector("#btDisponivel");

  if (imovel.nome != "Disponivel") {
    btVenda.disable = "true";
    btAluga.disable = "true";
  }

  btVenda.addEventListener("click", () => {
    alterarStatus(imovel.codigo, 3);
  });

  btAluga.addEventListener("click", () => {
    alterarStatus(imovel.codigo, 2);
  });

  btDisponivel.addEventListener("click", () => {
    alterarStatus(imovel.codigo, 1);
  });

  main.appendChild(nCard);
}

function alterarStatus(codigo, status) {
  fetch(`http://localhost:3000/alterar/${codigo}/${status}`, {
    method: "PUT",
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.affectedRows == 1) {
        carregar();
      }
    });
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
