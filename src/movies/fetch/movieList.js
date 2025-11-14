import { apiConfig } from "./ApiConfig";
import { showMovies } from "../functions/showMovies";


export async function getMovies(container, typelist = "upcoming"){
    try {
        const response = await fetch(
            `${apiConfig.baseUrl}${typelist}?api_key=${apiConfig.apiClave}`
            
        )
    if (!response.ok) throw new Error("Error:" + response.status)
    
    const data = await response.json();
    showMovies(data.results, container)

    } catch(error) {
        console.log(error)
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