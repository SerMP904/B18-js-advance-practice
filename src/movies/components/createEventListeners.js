import { getMovies } from "../fetch/movieList"

export function createSelectListener(select){
    select.addEventListener("change", (event) => {
        const elementSelected = event.target
        const mGrid = document.querySelector("movie-grid")
        getMovies(mGrid, elementSelected.value)
    })
}

export function displayMode(button){}


export function inDetail(){
    
}