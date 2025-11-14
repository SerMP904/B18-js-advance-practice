import { apiConfig } from "./ApiConfig";
import { showMovies } from "../functions/showMovies";

export async function getMovies(container, typelist = "upcoming"){
    try {
        console.log(apiConfig.apiClave)
        if (!apiConfig.baseUrl) {
            throw new Error("API base URL is missing.");
        } if (!apiConfig.apiClave){
            throw new Error("API key is missing.")
        }
        const response = await fetch(
       
            `${apiConfig.baseUrl}${typelist}?api_key=${apiConfig.apiClave}`
        )
    if (!response.ok) {throw new Error("Error:" + response.status)}
    
    const data = await response.json();
    console.log(data)
    showMovies(data.results, container)

    } catch (error) {
        console.log("error al cargar peliculas", error)

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