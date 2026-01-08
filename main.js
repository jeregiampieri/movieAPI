import { requestAPI, key } from "./assets/request/request.js";

// Constantes para mantener las URL necesarias para insertarles la API key
// A estos endpoints los estoy pasando por query params (esto lo puedo ver en la documentación de la API), en este caso, los params que estoy usando
// sería language y page
const urlTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`
const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
const urlUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
const urlImg = `https://image.tmdb.org/t/p/original`

// Elementos que traigo desde el index.html 
const contenedorPeliculas = document.querySelector(".contenedor-peliculas")
const pagina = document.querySelector(".pagina")
const botonSiguiente = document.querySelector(".siguiente")
const botonAnterior = document.querySelector(".anterior")

// Objeto para poder mantener el estado actual de la aplicación
const appState = {
    page: null,
    // Creo este atributo para poder hacer el control y validación de que el usuario no exceda el total máximo de páginas
    totalPage: null,
    url: urlTrending
}

// Función para renderizar las películas que se muestran apenas se ejecuta la aplicación
const renderInicial = async() => {
    // Como la función del request tiene por defecto page=1, si no le paso un parámetro, toma dicho valor 
    const data = await requestAPI(appState.url)
    appState.totalPage = data.total_pages
    appState.page = data.page
    renderPeliculas(data.results)
}

// Función para renderizar las peliculas
const renderPeliculas = (data) => {
    const lista = data.map((pelicula) => {
        return peliculaData(pelicula)
    })
    
    contenedorPeliculas.innerHTML += lista.map((pelicula) => {
        return peliculaCardTemplate(pelicula)
    }).join("")
}

// Función para armar la estructura HTML de la pelicula
const peliculaCardTemplate = (pelicula) => {
    return `
        <div class="contenedor-pelicula">
            <img src="${urlImg}${pelicula.imagen}"
            alt="Imagen de ${pelicula.titulo}"
            card ="imagen-pelicula"/>
            <p class="popularidad-pelicula"></p>
            <div class="contenido-pelicula">
                <h2>${pelicula.titulo}</h2>
                <p>Fecha de estreno: ${pelicula.fecha}</p>
            </div>

        </div>
    `
}

// Cada pelicula es un objeto, por lo tanto, la desestructuración tiene que ser como objeto
const peliculaData = (pelicula) => {
    return {titulo: pelicula.title,
        imagen: pelicula.poster_path,
        voto: pelicula.vote_average,
        fecha: pelicula.release_date
    }
}

// Función para actualizar el paginado
const actualizarPaginado = () => {
    pagina.innerHTML = appState.page
    toggleBotonAnterior()
    toggleBotonSiguiente()
}

// Función para deshabilitar el botón anterior cuando la página es 1
const toggleBotonAnterior = () => {
    if (appState.page === 1){
        botonAnterior.classList.add("bloquear")
    } else{ 
        botonAnterior.classList.remove("bloquear")
    }
}

// Función para deshabilitar el botón siguiente cuando la página llega al máximo permitido
const toggleBotonSiguiente = () => {
    if (appState.page === appState.totalPage){
        botonSiguiente.classList.add("bloquear")
    } else {
        botonSiguiente.classList.remove("bloquear")
    }
}





// Función inicializadora de la aplicación
const init = () => {
    // Apenas se carga todo el DOM de la aplicación, se escucha este evento para disparar la función correspondiente
    window.addEventListener("DOMContentLoaded", renderInicial)
}

init()

