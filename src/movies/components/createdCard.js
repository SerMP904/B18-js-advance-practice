import { apiConfig } from "../fetch/ApiConfig";

let movieCounter = 0;

export function createCard(movie){
    const mCard = document.createElement("div");
    mCard.className = ""; //añadir clase
    const mImg = document.createElement("img");
    mImg.className = "";
    mImg.setAttribute("src", `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
    mImg.addEventListener("click")
    //Aqui va un eventListener para los detalles
    mImg.addEventListener("click", (event)=>{
        mCard.textContent("hola")
        mCard.setAttribute("id", "hola")
    })


    const mInfo = document.createElement("div");

    const mTitulo = document.createElement("h1");
    mTitulo.className = ""
    mTitulo.textContent = movie.original_title;

    const mOverview = document.createElement("p");
    mOverview.className = "movieOverview";

    fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiConfig.apiClave}&language=es-ES`)
        .then(response => {
            if (!response.ok){
                throw new Error("no hay sinopsis" + response.status)
            }
            return response.json()
        }) .then(data => {
            mOverview.textContent = data.overview;
  }) .catch(error => {
    console.error("Error en la sinopsis:", error);
  });



    const mRating = document.createElement("div");
    mRating.className= ""; //añadir clase
    mRating.textContent= movie.vote_average;

    const mFecha = document.createElement("p");
    mFecha.classList = "";
    mFecha.textContent = `${movie.release_date}`

    mCard.appendChild(mImg)

    mInfo.appendChild(mTitulo)
    mInfo.appendChild(mOverview)
    mInfo.appendChild(mRating)
    mInfo.appendChild(mFecha)

    mCard.appendChild(mInfo)

    return mCard;
}

export function createCardDetails(data, cast = []){

    const details = document.createElement("div")
    details.classList.add(`card${movieCounter}`)

    const mImg = document.createElement("img");
    mImg.className = "movie-poster"
    mImg.setAttribute("src", `https://image.tmdb.org/t/p/w300${data.poster_path}`)
    mImg.addEventListener("click", (event) =>{
        details.textContent("hola")
    })

    const mTitle = document.createElement("h1")
    mTtile.className = "movie-title"
    mTitle.textContent = data.original_title

    const mDescription = document.createElement("p")
    mDescription.textContent = data.overview

    const actorContainer = document.createElement("div")
    cast.forEach((actor)=>{
        if(actor.poster_path !== null){
            const actorDiv = document.createElement("div")
            actorDiv.className = "" //añadir clase
            const actorImg = document.createElement("img")
            const actorName = document.createElement("p")
            actorImg.setAttribute("src", `https://image.tmdb.org/t/p/w200${actor.profile_path}`)
            actorImg.className = "" //añadir clase
            actorName.textContent = actor.name;
            actorName.className = "" //añadir clase
            actorDiv.appendChild(actorImg)
            actorDiv.appendChild(actorName)
            actorContainer.appendChild(actorDiv)
        }
    })
    details.appendChild(mImg)
    details.appendChild(mTitle)
    details.appendChild(mDescription)
    details.appendChild(actorContainer)

    return details;
}