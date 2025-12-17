export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Endpoint pedido desde el frontend
  const path = url.searchParams.get("path");
  if (!path) {
    return new Response("Missing path", { status: 400 });
  }

  const tmdbURL = `https://api.themoviedb.org/3/${path}&api_key=${env.TMDB_API_KEY}`;

  const response = await fetch(tmdbURL, {
    headers: { "Content-Type": "application/json" }
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
