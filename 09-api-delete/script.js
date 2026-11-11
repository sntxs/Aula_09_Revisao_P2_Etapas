const formulario = document.querySelector("#formulario");
const id = document.querySelector("#id");
const status = document.querySelector("#status");
const saida = document.querySelector("#saida");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (id.value === "") {
    status.textContent = "Informe um ID.";
    status.className = "alert alert-danger mt-3";
    return;
  }

  // A confirmação reduz exclusões acidentais na interface.
  const confirmou = window.confirm(`Deseja solicitar a exclusão do post ${id.value}?`);
  if (!confirmou) return;

  // A confirmação melhora a experiência, mas não substitui autenticação e autorização no servidor.

  status.textContent = "Enviando DELETE...";
  status.className = "alert alert-info mt-3";

  fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`, {
    method: "DELETE",
  })
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("A API respondeu com erro.");
      // Não chamamos json(): DELETE pode retornar corpo vazio.
      return resposta;
    })
    .then(function () {
      saida.textContent = `Exclusão simulada do post ${id.value} confirmada.`;
      status.textContent = "DELETE realizado com sucesso.";
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      saida.textContent = erro.message;
      status.textContent = "Não foi possível excluir o post.";
      status.className = "alert alert-danger mt-3";
    });
});
