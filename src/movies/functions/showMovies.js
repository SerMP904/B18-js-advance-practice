import { createCard, detailsCard } from "../components/createdCard";

export function showMovies(movies, container){
    if (!movies || movies.length === 0){
        container.textContent = "No hay pelis"
        return;
    } else {
        container.innerHTML = "";
    }

    if(Array.isArray(movies)){
        container.innerHTML = "";
        movies.forEach((movie) =>{
            const movieCard = createCard(movie);
            container.appendChild(movieCard)
        })} else {
            console.log("One movie") //quitar
            const oneMovie = detailsCard(movies) //esto es experimental, deberia estar atado a un addeventlistener
            const displayMode = document.querySelector(".movieDistribution") 
            displayMode.className="movieFocus"
            const newContainer = document.querySelector(".movieNumber")
            console.log(oneMovie)
            console.log(displayMode)
            newContainer.appendChild(oneMovie)
    }
}
/*
export function cardDetails(movie){
    
    details.appendChild(refImg)
    return details
}*/