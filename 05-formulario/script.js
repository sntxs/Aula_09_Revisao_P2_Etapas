const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const status = document.querySelector("#status");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const emailValido = email.value.trim() !== "" && email.validity.valid;
  const senhaValida = senha.value.trim().length >= 4;

  email.classList.toggle("is-valid", emailValido);
  email.classList.toggle("is-invalid", !emailValido);
  senha.classList.toggle("is-valid", senhaValida);
  senha.classList.toggle("is-invalid", !senhaValida);

  const formularioValido = emailValido && senhaValida;
  status.className = `alert mt-3 ${formularioValido ? "alert-success" : "alert-danger"}`;
  status.textContent = formularioValido ? "Formulário válido." : "Corrija os campos destacados.";
});
