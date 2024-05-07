const key = import.meta.env.VITE_IMDB_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

const paginationUrl = {
  pagiPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&`,
  pagiTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&`,
  pagiTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&`,
  pagiNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&`,
  pagiUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&`,
};

const detailUrl = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US'&api_key=${key}`
  return url
}

export default { requests, paginationUrl, detailUrl };