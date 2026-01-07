import { requestAPI, key } from "./assets/request/request.js";

// Constantes para mantener las URL necesarias para insertarles la API key
const urlTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`
const urlTopRates = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
const urlUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
const urlImg = `https://image.tmdb.org/t/p/original`

// Función inicializadora de la aplicación
const init = () => {
    requestAPI(urlUpComing)
}

init()

