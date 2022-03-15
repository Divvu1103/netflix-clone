const API_KEY = "0a6970ecc8b7e7545d2942877bf8ed99";


export default {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
   
  fetchNetflixOriginals: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchComedyMovies: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchHorrorMovies: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchRomanceMovies:`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchDocumentaries: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
