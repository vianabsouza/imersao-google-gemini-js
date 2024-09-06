let section = document.getElementById("resultados-pesquisa");

let results = "";

for(let item of data) {
  results += `
    <div class="item-resultado">
      <h2>
        ${item.title}
      </h2>
      <p class="descricao-meta">
        ${item.description}
      </p>
      <a href="${item.link}" target="_blank">
        Mais informações
      </a>
    </div>
  `
}

section.innerHTML = results;