import './scss/style.scss'
import { selectMovie } from './movies/functions/selectMovies';
import { createButton } from './movies/components/createButton';



document.querySelector('#app').innerHTML = ``

const app = document.querySelector("#app");

const main = document.createElement("div")
main.className = "main"

const buttonGrid = createButton("grid")
buttonGrid.setAttribute("id", "gridButton")
const buttonRow = createButton("rows")
buttonRow.setAttribute("id", "rowButton")
const returnButton = createButton("return")
returnButton.className="buttonNull"
returnButton.setAttribute("id", "returnButton")

const buttonContainer = document.createElement("div")
buttonContainer.className="buttons"

const movieDisplay = document.createElement("div")
movieDisplay.setAttribute("id", "movieDisplay")

const movieDistribution = document.createElement("div")
movieDistribution.setAttribute("id", "moviesShow")

const movieMainGrid = document.createElement("div")
movieMainGrid.className = "movieMainGrid"
const movieSelection = selectMovie() 
movieSelection.className="movieSelection"

buttonContainer.appendChild(buttonGrid)
buttonContainer.appendChild(buttonRow)
buttonContainer.appendChild(returnButton)

main.appendChild(buttonContainer)
main.appendChild(movieSelection)
main.appendChild(movieMainGrid)
movieDistribution.appendChild(movieDisplay)
movieMainGrid.appendChild(movieDistribution)
app.appendChild(main)

