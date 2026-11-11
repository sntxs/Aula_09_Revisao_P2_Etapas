# Etapa 01 — Bootstrap

Observe como `container`, `row`, `col-*`, `card`, `btn` e classes responsivas criam uma interface sem CSS extenso.

## Exemplo rápido

```html
<div class="col-12 col-md-4">
  <article class="card h-100">
    <div class="card-body">Conteúdo do card</div>
  </article>
</div>
```

Nesse exemplo, o card ocupa toda a largura no celular e divide o espaço em três colunas a partir do breakpoint `md`.

## Teste

Reduza a janela do navegador e observe as colunas. Depois altere `col-md-4` para `col-lg-3` e compare o resultado.

## Desafio

Adicione um quarto card sem quebrar o layout em telas pequenas.
