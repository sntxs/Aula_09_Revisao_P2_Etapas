# Etapa 04 — DOM e eventos

O JavaScript encontra elementos com `querySelector()` e reage ao clique e à digitação com `addEventListener()`.

## Exemplo rápido

```javascript
const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
  document.querySelector("#mensagem").textContent = "Clicou!";
});
```

O JavaScript encontra o botão pelo ID e altera o texto quando o evento de clique acontece.

## Observe

- o elemento encontrado pelo seletor;
- o evento `click`;
- o evento `input`;
- a alteração feita com `textContent`;
- a alteração visual feita com `classList`.

## Desafio

Crie um segundo botão que limpe a mensagem sem recarregar a página.
