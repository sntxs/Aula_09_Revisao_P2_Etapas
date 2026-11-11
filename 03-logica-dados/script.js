const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.5 },
  { nome: "Carla", nota: 9.2 },
];

function criarResumo(aluno) {
  const aprovado = aluno.nota >= 7;
  return `${aluno.nome} — nota ${aluno.nota} — ${aprovado ? "aprovado" : "em recuperação"}`;
}

const lista = document.querySelector("#lista");

alunos.forEach(function (aluno) {
  const item = document.createElement("div");
  item.className = "list-group-item";
  item.textContent = criarResumo(aluno);
  lista.appendChild(item);
});
