const IMG = 'https://image.tmdb.org/t/p/w500';

async function cargarCatalogo() {
  const res = await fetch('/tmdb?path=trending/movie/week?language=es');
  const data = await res.json();

  const grid = document.getElementById('catalogo-grid');

  data.results.slice(0,12).forEach(p => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = `pelicula.html?id=${p.id}`;
    card.innerHTML = `
      <img src="${IMG + p.poster_path}" alt="${p.title}">
      <h3>${p.title}</h3>
    `;
    grid.appendChild(card);
  });
}

cargarCatalogo();
