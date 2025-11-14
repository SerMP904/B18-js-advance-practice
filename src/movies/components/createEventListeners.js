import { getMovies } from "../fetch/movieList"

export function createSelectListener(select){
    select.addEventListener("change", (event) => {
        const elementSelected = event.target
        const mDisplay = displayMode()
        getMovies(mDisplay, elementSelected.value)
    })
}

export function displayMode(){
    const buttonGridMode = document.querySelector(".buttonGrid") 
    const buttonRowMode = document.querySelector(".buttonRows")
    const displayMode = document.querySelector("#movieDisplay") 
    buttonGridMode.addEventListener('click', ()=>{
        displayMode.className= "movieDisplayGrid"
        console.log("funciona grid")
    })
    buttonRowMode.addEventListener('click', ()=>{
        displayMode.className="movieDisplayRows" 
        console.log("funciona row")
    })
    return displayMode
}
    



export function inDetail(){
    
}