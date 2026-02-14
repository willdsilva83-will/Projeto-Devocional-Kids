fetch('data/devocionais.json')
  .then(res => res.json())
  .then(devocionais => {
    const lista = document.getElementById('lista');
    const pesquisaInput = document.getElementById('pesquisa');

    function renderLista(filtro = "") {
      lista.innerHTML = "";

      devocionais
        .filter(d => d.titulo.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(d => {
          const card = document.createElement('div');
          card.className = "card";

          const status = isConcluido(d.id)
            ? '<span class="concluido">✔ Concluído</span>'
            : '<span class="pendente">Não concluído</span>';

          card.innerHTML = `
            <h3>${d.titulo}</h3>
            <p>${d.data}</p>
            ${status}
            <br><br>
            <a href="devocional.html?id=${d.id}">
              <button>Abrir</button>
            </a>
          `;

          lista.appendChild(card);
        });
    }

    renderLista();

    pesquisaInput.addEventListener('input', e => {
      renderLista(e.target.value);
    });
  });
