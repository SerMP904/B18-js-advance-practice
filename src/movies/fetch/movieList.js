import { apiConfig } from "./ApiConfig";
import { showMovies } from "../functions/showMovies";


export async function getMovies(container, typelist = "upcoming"){
<<<<<<< HEAD
    try {
        const response = await fetch(
            `${apiConfig.baseUrl}${typelist}?api_key=${apiConfig.apiClave}`
            
        )
    if (!response.ok) throw new Error("Error:" + response.status)
    
    const data = await response.json();
    showMovies(data.results, container)

    } catch(error) {
        console.log(error)
=======

    try {
        const response = await fetch(
            `${apiConfig.baseUrl}${typelist}?api_key=${apiConfig.apiClave}`
        )
    if (!response.ok) {throw new Error("Error:" + response.status)}
    
    const data = response.json();
    console.log(data.results)
    showMovies(data.results, container)

    } catch(error) {
        console.log("error al cargar peliculas")
>>>>>>> fdf0c48ca9de39889cb636ae8c599e47622f751d
    }
}

export async function getMovieInDetail(container, id) {
    try {
        const response = await fetch (
            `${apiConfig.baseUrl}${id}?api_key=${apiConfig.apiClave}`
        );
    if (!response.ok) {throw new Error("Error:" + response.status)}
    const data = await response.json();

    const cast = await getCast(id)
    const card = create
    } catch {}
}