# Etapa 09 — API com DELETE

`DELETE` solicita a exclusão de um recurso. O ID é colocado na URL.

## Observe

- `method: "DELETE"`;
- ID no endpoint;
- ausência de `body`;
- resposta que pode não possuir JSON;
- mensagem de sucesso ou erro.

## Segurança

Em um sistema real, não exclua dados apenas porque alguém clicou em um botão. Use confirmação, autenticação, autorização no servidor e regras para impedir exclusões indevidas.
