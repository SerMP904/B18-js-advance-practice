import './scss/style.scss'
import { selectMovie } from './movies/functions/selectMovies';

/*
document.querySelector('#app').innerHTML = `
`*/

const app = document.querySelector("#app");
const main = document.createElement("div")
main.className = "main"
app.appendChild(main)

const movieDistribution = document.createElement("div")
movieDistribution.setAttribute("#movie-list-container") 
movieDistribution.className("movie-grid") //variable, columna o fila dependediendo de que boton pulses

const movieSelection = selectMovie() 
movieSelection.className("movie-list")


main.appendChild(movieDistribution)
movieDistribution.appendChild(movieSelection)