const botao = document.querySelector("#buscar");
const status = document.querySelector("#status");
const saida = document.querySelector("#saida");

// Esta URL é pública apenas para estudo. Nunca coloque tokens ou chaves privadas no front-end.
const URL_API = "https://jsonplaceholder.typicode.com/posts/1";

botao.addEventListener("click", function () {
  status.textContent = "Consultando a API...";
  status.className = "alert alert-info mt-3";
  saida.textContent = "Aguarde...";

  fetch(URL_API)
    .then(function (resposta) {
      // Uma resposta HTTP de erro não rejeita automaticamente a Promise.
      if (!resposta.ok) throw new Error("A API respondeu com erro.");
      return resposta.json();
    })
    .then(function (dados) {
      // textContent evita interpretar o retorno como HTML.
      saida.textContent = JSON.stringify(dados, null, 2);
      status.textContent = "GET realizado com sucesso.";
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      saida.textContent = erro.message;
      status.textContent = "Não foi possível consultar a API.";
      status.className = "alert alert-danger mt-3";
    });
});
