const formulario = document.querySelector("#formulario");
const id = document.querySelector("#id");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const status = document.querySelector("#status");
const saida = document.querySelector("#saida");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const postAtualizado = {
    id: Number(id.value),
    title: titulo.value.trim(),
    body: conteudo.value.trim(),
    userId: 1,
  };

  // O servidor deve confirmar se a pessoa tem autorização para editar este ID.

  if (!postAtualizado.id || postAtualizado.title === "" || postAtualizado.body === "") {
    status.textContent = "Preencha todos os campos.";
    status.className = "alert alert-danger mt-3";
    return;
  }

  status.textContent = "Enviando PUT...";
  status.className = "alert alert-info mt-3";

  fetch(`https://jsonplaceholder.typicode.com/posts/${postAtualizado.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(postAtualizado),
  })
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("A API respondeu com erro.");
      return resposta.json();
    })
    .then(function (dados) {
      saida.textContent = JSON.stringify(dados, null, 2);
      status.textContent = `Post ${postAtualizado.id} atualizado. O retorno é simulado.`;
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      saida.textContent = erro.message;
      status.textContent = "Não foi possível atualizar o post.";
      status.className = "alert alert-danger mt-3";
    });
});
