const loginEmail = document.querySelector("#loginName");
const loginSenha = document.querySelector("#loginPassword");
const registerNome = document.querySelector("#registerName");
const registerEmail = document.querySelector("#registerEmail");
const registerSenha = document.querySelector("#registerPassword");
const registerTelefone1 = document.querySelector("#registerTelefone1");
const registerTelefone2 = document.querySelector("#registerTelefone2");

function autenticar() {
  let data = {
    email: loginEmail.value,
    senha: loginSenha.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/login", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        localStorage.setItem("user", JSON.stringify(info));

        window.location.href = "../pages/home.html";
      } else {
        alert(info.msg);
      }
    });
}

function registrar() {
  let data = {
    nome: registerNome.value,
    email: registerEmail.value,
    senha: registerSenha.value,
    telefone1: registerTelefone1.value,
    telefone2: registerTelefone2.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/add", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        localStorage.setItem("user", JSON.stringify(info));

        window.location.href = "../pages/login.html";
      } else {
        alert(info.msg);
      }
    });
}
