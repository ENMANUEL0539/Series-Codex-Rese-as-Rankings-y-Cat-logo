const params = new URLSearchParams(location.search);
const id = params.get('id');
const API_KEY = 'TU_API_KEY_TMDB';
const BASE = 'https://api.themoviedb.org/3';
const IMG = 'https://image.tmdb.org/t/p/w500';


async function cargarPelicula() {
const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}&language=es&append_to_response=videos`);
const d = await res.json();


document.getElementById('titulo').textContent = d.title;
document.getElementById('poster').src = IMG + d.poster_path;
document.getElementById('sinopsis').textContent = d.overview;


const yt = d.videos.results.find(v=>v.site==='YouTube');
if(yt) document.getElementById('trailer').src = `https://www.youtube.com/embed/${yt.key}`;
}


cargarPelicula();
