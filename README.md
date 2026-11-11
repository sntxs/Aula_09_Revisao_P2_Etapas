# Aula 09 — Revisão geral para a P2

Este projeto revisa os conteúdos trabalhados nas aulas de JavaScript, Bootstrap, DOM, formulários e APIs.

## Ordem recomendada para a aula

Como as etapas de API ficaram pendentes, comece por elas:

1. Etapa 06 — `GET`;
2. Etapa 07 — `POST`;
3. Etapa 08 — `PUT`;
4. Etapa 09 — `DELETE`.

Depois, retome as etapas 01 a 05 para revisar Bootstrap, JavaScript, lógica, DOM, eventos e formulários. A etapa final reúne tudo.

## Como estudar

1. Abra o `index.html` de uma etapa.
2. Leia o `INSTRUCOES.md` antes de alterar o código.
3. Execute a página no navegador.
4. Abra o DevTools com `F12`.
5. Observe o Console e, nas requisições, a aba Network.
6. Altere uma coisa por vez.
7. Explique com suas palavras o que mudou.

## API pública usada

Os exemplos de requisições usam a [JSONPlaceholder](https://jsonplaceholder.typicode.com/), uma API pública de testes:

```text
GET    https://jsonplaceholder.typicode.com/posts/1
POST   https://jsonplaceholder.typicode.com/posts
PUT    https://jsonplaceholder.typicode.com/posts/1
DELETE https://jsonplaceholder.typicode.com/posts/1
```

As respostas de `POST`, `PUT` e `DELETE` são simuladas. Os dados não ficam salvos permanentemente.

## Cuidados básicos de segurança no front-end

Estes cuidados não transformam um front-end em um sistema seguro sozinho, mas são práticas importantes:

- nunca coloque senhas, tokens privados ou chaves secretas no JavaScript enviado ao navegador;
- use HTTPS em APIs reais;
- valide os dados no navegador para melhorar a experiência, mas valide novamente no servidor;
- não confie em dados recebidos da API ou digitados pelo usuário;
- prefira `textContent` para exibir textos externos e tenha cuidado com `innerHTML`;
- confira `resposta.ok` antes de tratar uma resposta como sucesso;
- trate erros de rede e respostas HTTP inesperadas;
- não envie dados pessoais desnecessários para uma API pública;
- CORS não é autenticação: ele apenas controla permissões de origem no navegador;
- em uma API real, a autorização deve ser feita no servidor.

## Conteúdos revisados

- Bootstrap: container, grid, colunas, cards, botões, alertas e responsividade;
- JavaScript ES6: `let`, `const`, tipos, operadores, strings, template literals e `if/else`;
- lógica: laços, funções, arrays e objetos;
- DOM: `querySelector`, `textContent`, `classList` e atributos;
- eventos: `click`, `input`, `submit` e `addEventListener`;
- formulários: `preventDefault`, validação e feedback visual;
- APIs: endpoint, JSON, `fetch`, `GET`, `POST`, `PUT` e `DELETE`.

## Orientação para monitores

- Peçam que o aluno abra a etapa atual e leia as instruções.
- Não entreguem a solução pronta; perguntem qual elemento, seletor ou linha está envolvido.
- Nas APIs, peçam que o aluno identifique método, URL, headers e body.
- Mostrem a aba Network para conferir o método HTTP.
- Se houver erro, leiam o Console antes de alterar o código.
- Reforcem que os exemplos usam uma API de testes e não representam autenticação de produção.
