const nome = "Turma de Desenvolvimento Web";
let quantidade = 1;
const aula = 9;

quantidade = quantidade + 1;

const mensagem = `${nome} está na aula ${aula}.`;
const situacao = quantidade >= 2 ? "A revisão está acontecendo." : "A revisão ainda não começou.";

console.log(typeof nome, typeof quantidade, typeof aula);
console.log(mensagem);
console.log(situacao);

document.querySelector("#saida").textContent = `${mensagem} ${situacao}`;
