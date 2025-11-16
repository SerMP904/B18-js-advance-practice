import { createCard, detailsCard } from "../components/createdCard";

export function showMovies(movies, container, typelist){
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
            console.log("One movie") 
            const oneMovie = detailsCard(movies, typelist) 
            const newContainer = document.querySelector(".movieMainGrid")
            console.log(oneMovie)
            newContainer.appendChild(oneMovie)
    }
}
