const formulario = document.querySelector("#formulario");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const status = document.querySelector("#status");
const saida = document.querySelector("#saida");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const novoPost = {
    title: titulo.value.trim(),
    body: conteudo.value.trim(),
    userId: 1,
  };

  // Validação no navegador ajuda a pessoa usuária, mas o servidor deve validar novamente.

  if (novoPost.title === "" || novoPost.body === "") {
    status.textContent = "Preencha os campos antes de enviar.";
    status.className = "alert alert-danger mt-3";
    return;
  }

  status.textContent = "Enviando POST...";
  status.className = "alert alert-info mt-3";

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      // Informe à API o formato do conteúdo enviado.
      "Content-Type": "application/json; charset=UTF-8",
    },
    // Não envie dados sensíveis para uma API pública e nunca coloque segredos neste arquivo.
    body: JSON.stringify(novoPost),
  })
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("A API respondeu com erro.");
      return resposta.json();
    })
    .then(function (dados) {
      saida.textContent = JSON.stringify(dados, null, 2);
      status.textContent = "POST realizado. O retorno é simulado.";
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      saida.textContent = erro.message;
      status.textContent = "Não foi possível enviar os dados.";
      status.className = "alert alert-danger mt-3";
    });
});
