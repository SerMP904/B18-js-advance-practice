import './scss/style.scss'
import { selectMovie } from './movies/functions/selectMovies';
import { createButton } from './movies/components/createButton';

document.querySelector('#app').innerHTML = ``

const app = document.querySelector("#app");

const main = document.createElement("div")
main.className = "main"

const prueba = document.createElement("div")

const buttonGrid = createButton("grid")
const buttonRow = createButton("rows")
const buttonContainer = document.createElement("div")
buttonContainer.className="buttons"

const movieDisplay = document.createElement("div")
movieDisplay.setAttribute("id", "movieDisplay")

const movieDistribution = document.createElement("div")
movieDistribution.className = "movieDistribution"

const movieSelection = selectMovie() 
movieSelection.className="movieSelection"

buttonContainer.appendChild(buttonGrid)
buttonContainer.appendChild(buttonRow)
main.appendChild(buttonContainer)
main.appendChild(movieSelection)
movieDistribution.appendChild(movieDisplay)
main.appendChild(movieDistribution)
app.appendChild(main)
app.appendChild(prueba)
