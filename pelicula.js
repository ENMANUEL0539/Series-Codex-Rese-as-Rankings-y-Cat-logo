const IMG = 'https://image.tmdb.org/t/p/w500';
const id = new URLSearchParams(location.search).get('id');

async function cargarPelicula() {
  const res = await fetch(
    `/tmdb?path=movie/${id}?language=es&append_to_response=videos`
  );
  const d = await res.json();

  document.getElementById('titulo').textContent = d.title;
  document.getElementById('poster').src = IMG + d.poster_path;
  document.getElementById('sinopsis').textContent = d.overview;

  const yt = d.videos.results.find(v => v.site === 'YouTube');
  if (yt) {
    document.getElementById('trailer').src =
      `https://www.youtube.com/embed/${yt.key}`;
  }
}

cargarPelicula();
