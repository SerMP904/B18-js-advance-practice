import { createCard } from "../components/createdCard";

export function showMovies(movies, container){
    if (!movies || movies.length === 0){
        container.textContent = "No hay pelis"
        return;
    } else {
        container.innerHTML = "";
    }
<<<<<<< HEAD
    if(Array.isArray(movies)){
        //container.innerHTML = "";
=======

    if(Array.isArray(movies)){
        container.innerHTML = "";
>>>>>>> fdf0c48ca9de39889cb636ae8c599e47622f751d
        movies.forEach((movie) =>{
            const movieCard = createCard(movie);
            container.appendChild(movieCard)
        })} else {
<<<<<<< HEAD
            console.log("sorry")
=======
>>>>>>> fdf0c48ca9de39889cb636ae8c599e47622f751d
            const oneMovie = CardDetails(movies) //esto es experimental, deberia estar atado a un addeventlistener
            container.appendChild(oneMovie)
    }
}