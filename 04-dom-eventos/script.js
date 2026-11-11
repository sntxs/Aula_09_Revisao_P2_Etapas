const campoNome = document.querySelector("#nome");
const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
  const nome = campoNome.value.trim();

  mensagem.textContent = nome === "" ? "Digite um nome primeiro." : `Olá, ${nome}!`;
  mensagem.classList.toggle("alert-success", nome !== "");
});

campoNome.addEventListener("input", function () {
  mensagem.textContent = "Você está digitando...";
  mensagem.classList.remove("alert-success");
});
