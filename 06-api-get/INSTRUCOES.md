# Etapa 06 — API com GET

`GET` normalmente consulta dados. Nesta etapa, `fetch()` acessa um endpoint HTTPS, confere `response.ok`, converte a resposta com `response.json()` e mostra o resultado.

## Observe

- URL do endpoint;
- promessa retornada por `fetch()`;
- `response.ok`;
- `response.json()`;
- `textContent` para exibir o retorno.

## Segurança

O front-end não deve confiar cegamente na resposta. Confira o status da resposta e evite inserir dados externos com `innerHTML` sem necessidade.
