# Etapa 05 — Formulário e validação

O formulário não deve recarregar a página. O evento `submit` é capturado e `preventDefault()` permite que o JavaScript valide os campos.

## Exemplo rápido

```javascript
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (campo.value.trim() === "") {
    mensagem.textContent = "Preencha o campo.";
  }
});
```

O evento é interrompido, o valor é lido e uma decisão define o feedback visual.

## Observe

- a relação entre `label` e `id`;
- o uso de `.value` e `.trim()`;
- a condição com `if/else`;
- as classes `is-valid`, `is-invalid` e `alert` do Bootstrap.

## Cuidados

A validação no navegador melhora a experiência, mas não substitui a validação no servidor quando os dados forem enviados para uma aplicação real.
