import { createCard } from "../components/createdCard";

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
            const oneMovie = CardDetails(movies) //esto es experimental, deberia estar atado a un addeventlistener
            container.appendChild(oneMovie)
    }
}