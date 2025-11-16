import { getMovies } from "../fetch/movieList" 

export function createSelectListener(select){
    select.addEventListener("change", (event) => {
        const elementSelected = event.target
        console.log(event.target.value)
        const mDisplay = displayMode()
        getMovies(mDisplay, elementSelected.value)
    })
}

function displayMode(){
    const buttonGridMode = document.querySelector("#gridButton") 
    const buttonRowMode = document.querySelector("#rowButton")
    const displayMode = document.querySelector("#movieDisplay") 
    
    displayMode.className="movieDisplayGrid" 

    buttonGridMode.addEventListener('click', ()=>{
        displayMode.className= "movieDisplayGrid"
    })
    buttonRowMode.addEventListener('click', ()=>{
        displayMode.className="movieDisplayRows" 
    })
    return displayMode
}

export function inDetail(){
    
}