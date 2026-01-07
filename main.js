import { requestAPI, key } from "./assets/request/request.js";

// Constantes para mantener las URL necesarias para insertarles la API key
// A estos endpoints los estoy pasando por query params (esto lo puedo ver en la documentación de la API), en este caso, los params que estoy usando
// sería language y page
const urlTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`
const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
const urlUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
const urlImg = `https://image.tmdb.org/t/p/original`

// Objeto para poder mantener el estado actual de la aplicación
const appState = {
    page: null,
    // Creo este atributo para poder hacer el control y validación de que el usuario no exceda el total máximo de páginas
    totalPage: null,
    url: urlTrending
}

// Función inicializadora de la aplicación
const init = () => {
    requestAPI(urlTrending,5)
}

init()

