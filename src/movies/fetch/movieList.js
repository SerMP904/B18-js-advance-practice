import { apiConfig } from "./ApiConfig";

export async function getMovies(container, typelist = "upcoming"){

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
    }
}