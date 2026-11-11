# Etapa 07 — API com POST

`POST` envia dados para a API. O formulário cria um objeto, o código usa `JSON.stringify()` e informa o tipo de conteúdo no header.

## Observe

- `preventDefault()`;
- objeto `novoPost`;
- `method: "POST"`;
- `Content-Type`;
- `body`;
- retorno JSON.

## Segurança

Não coloque senhas ou tokens secretos no front-end. Em uma API real, o servidor deve validar os dados, autenticar a pessoa usuária e autorizar a operação.
