# Etapa 08 — API com PUT

`PUT` atualiza um recurso existente. O ID aparece no endpoint e os novos dados são enviados no `body` como JSON.

## Observe

- o ID sendo usado na URL;
- `method: "PUT"`;
- `headers`;
- `JSON.stringify()`;
- o tratamento de sucesso e erro.

## Segurança

O ID e os dados enviados não devem ser considerados confiáveis apenas porque vieram de um formulário. Em uma API real, o servidor precisa verificar autorização e validar se a pessoa pode editar aquele recurso.
