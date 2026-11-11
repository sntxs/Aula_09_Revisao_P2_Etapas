// A URL é pública para estudo. Nunca armazene tokens, senhas ou chaves privadas no front-end.
const URL_API = "https://jsonplaceholder.typicode.com/posts";

const listaPosts = document.querySelector("#lista-posts");
const btnGet = document.querySelector("#btn-get");
const getStatus = document.querySelector("#get-status");

const formPost = document.querySelector("#form-post");
const postTitle = document.querySelector("#post-title");
const postBody = document.querySelector("#post-body");
const postStatus = document.querySelector("#post-status");
const postOutput = document.querySelector("#post-output");

const formPut = document.querySelector("#form-put");
const putId = document.querySelector("#put-id");
const putTitle = document.querySelector("#put-title");
const putBody = document.querySelector("#put-body");
const putStatus = document.querySelector("#put-status");
const putOutput = document.querySelector("#put-output");

const formDelete = document.querySelector("#form-delete");
const deleteId = document.querySelector("#delete-id");
const deleteStatus = document.querySelector("#delete-status");
const deleteOutput = document.querySelector("#delete-output");

function mostrarStatus(elemento, mensagem, tipo) {
  elemento.textContent = mensagem;
  elemento.className = `alert alert-${tipo} mt-3`;
}

function mostrarErro(elemento, erro) {
  // Mostramos uma mensagem controlada; não exibimos dados sensíveis do ambiente.
  elemento.textContent = erro.message;
}

function validarTexto(valor) {
  return valor.trim() !== "";
}

// GET: busca os primeiros posts e cria cards com textContent.
btnGet.addEventListener("click", function () {
  mostrarStatus(getStatus, "Carregando posts...", "info");
  listaPosts.textContent = "";

  fetch(`${URL_API}?_limit=6`)
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("Não foi possível carregar os posts.");
      return resposta.json();
    })
    .then(function (posts) {
      posts.forEach(function (post) {
        const coluna = document.createElement("div");
        coluna.className = "col-12 col-md-6 col-lg-4";

        const card = document.createElement("article");
        card.className = "card h-100 border-0 shadow-sm";

        const corpo = document.createElement("div");
        corpo.className = "card-body";

        const titulo = document.createElement("h3");
        titulo.className = "h6";
        // textContent evita interpretar dados recebidos como HTML executável.
        titulo.textContent = post.title;

        const texto = document.createElement("p");
        texto.className = "small text-secondary mb-0";
        texto.textContent = post.body;

        corpo.append(titulo, texto);
        card.append(corpo);
        coluna.append(card);
        listaPosts.append(coluna);
      });

      mostrarStatus(getStatus, "GET realizado com sucesso.", "success");
    })
    .catch(function (erro) {
      mostrarErro(listaPosts, erro);
      mostrarStatus(getStatus, "Ocorreu um erro no GET.", "danger");
    });
});

// POST: envia um novo objeto no corpo da requisição.
formPost.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const novoPost = { title: postTitle.value.trim(), body: postBody.value.trim(), userId: 1 };
  // Esta validação melhora a interface; a API real precisa validar novamente no servidor.
  if (!validarTexto(novoPost.title) || !validarTexto(novoPost.body)) {
    mostrarStatus(postStatus, "Preencha título e conteúdo.", "danger");
    return;
  }

  mostrarStatus(postStatus, "Enviando POST...", "info");
  fetch(URL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(novoPost),
  })
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("A API recusou o POST.");
      return resposta.json();
    })
    .then(function (dados) {
      postOutput.textContent = JSON.stringify(dados, null, 2);
      mostrarStatus(postStatus, "POST realizado. Retorno simulado.", "success");
    })
    .catch(function (erro) {
      mostrarErro(postOutput, erro);
      mostrarStatus(postStatus, "Ocorreu um erro no POST.", "danger");
    });
});

// PUT: atualiza o recurso identificado pelo ID.
formPut.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const id = Number(putId.value);
  const dados = { id, title: putTitle.value.trim(), body: putBody.value.trim(), userId: 1 };
  if (!id || !validarTexto(dados.title) || !validarTexto(dados.body)) {
    mostrarStatus(putStatus, "Informe um ID, título e conteúdo.", "danger");
    return;
  }

  mostrarStatus(putStatus, "Enviando PUT...", "info");
  fetch(`${URL_API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(dados),
  })
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("A API recusou o PUT.");
      return resposta.json();
    })
    .then(function (retorno) {
      putOutput.textContent = JSON.stringify(retorno, null, 2);
      mostrarStatus(putStatus, `Post ${id} atualizado. Retorno simulado.`, "success");
    })
    .catch(function (erro) {
      mostrarErro(putOutput, erro);
      mostrarStatus(putStatus, "Ocorreu um erro no PUT.", "danger");
    });
});

// DELETE: solicita a exclusão e não tenta converter uma resposta vazia em JSON.
formDelete.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const id = Number(deleteId.value);
  if (!id) {
    mostrarStatus(deleteStatus, "Informe um ID válido.", "danger");
    return;
  }

  if (!window.confirm(`Deseja excluir o post ${id}?`)) return;

  // Confirmação não substitui autenticação nem autorização no servidor.

  mostrarStatus(deleteStatus, "Enviando DELETE...", "info");
  fetch(`${URL_API}/${id}`, { method: "DELETE" })
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("A API recusou o DELETE.");
      return resposta;
    })
    .then(function () {
      deleteOutput.textContent = `Exclusão simulada do post ${id} confirmada.`;
      mostrarStatus(deleteStatus, "DELETE realizado com sucesso.", "success");
    })
    .catch(function (erro) {
      mostrarErro(deleteOutput, erro);
      mostrarStatus(deleteStatus, "Ocorreu um erro no DELETE.", "danger");
    });
});
