let currentCep = "";
const getInput = document.querySelector("#dig-cep");
const btn = document.querySelector("button");
let cep = document.querySelector("#cep");
let estado = document.querySelector("#uf");
let rua = document.querySelector("#logradouro");
let cidade = document.querySelector("#cidade");
let ddd = document.querySelector("#ddd");
let url = `https://viacep.com.br/ws/${currentCep}/json/`;

function escrever(data) {
  cidade.innerHTML = data.localidade;
  cep.innerHTML = data.cep;
  estado.innerHTML = data.uf;
  rua.innerHTML = data.logradouro;
  ddd.innerHTML = data.ddd;
}

function preencherContainer() {
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      if (data.cep !== undefined) {
        escrever(data);
      } else {
        cepNulo();
      }
    });
  });
}

btn.addEventListener("click", function (e) {
  currentCep = getInput.value;
  url = `https://viacep.com.br/ws/${currentCep}/json/`;
  console.log(currentCep);

  if (currentCep.length > 8 || currentCep.length < 8) {
    cepNulo();
  } else {
    preencherContainer();
  }
  e.preventDefault();
});

getInput.onfocus = function () {
  defaultValues();
};

function cepNulo() {
  btn.style.width = "200px";
  btn.innerText = "OPS! Esse Cep Não Existe!";
  cidade.innerHTML = "Ops!";
  estado.innerHTML = "Ops!";
  rua.innerHTML = "Ops!";
  ddd.innerHTML = "Ops!";
  cep.innerHTML = "Ops!";
}
function defaultValues() {
  btn.style.width = "100px";
  btn.innerText = "Enter";
  getInput.value = "";
  cidade.innerHTML = "";
  estado.innerHTML = "";
  rua.innerHTML = "";
  ddd.innerHTML = "";
  cep.innerHTML = "";
}
/* preencherContainer(); */
