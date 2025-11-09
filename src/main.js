import './scss/style.scss'

document.querySelector('#app').innerHTML = `
`
const app = document.querySelector("#app")
const main = document.createElement("div")
app.appendChild(main)

const movieDistribution = document.createElement("div")
movieDistribution.setAttribute("#movie-list-container") //variable, 4 columnas o 1 dependediendo de que boton pulses

const movieSelection = selectMovies() //variable, columna o fila dependediendo de que boton pulses

main.appendChild(movieDistribution)
movieDistribution.appendChild(singMovie)