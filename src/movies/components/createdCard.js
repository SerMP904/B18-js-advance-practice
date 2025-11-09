import { apiConfig } from "../fetch/ApiConfig.js";

export function createCard(movie){

    if (movie.poster_path !== null){
        const mCard = document.createElement("div")
        mCard.className = ""; //añadir clase
        const mImg = document.createElement("img");
        mImg.className = "movie-poster";
        //mImg.setAttribute("src", `${baseUrl}${movie.poster_path}`)
    }

    //mImg addEventListener

    const mTitulo = document.createElement("h1");
    mTitulo.className = "movie-title"
    mTitulo.textContent = movie.original_title;

    const mOverview = document.createElement("p");
    mOverview.className = "movie-overview";
    mOverview.textContent = movie.overview // buscar nombre path

    const mRating = document.createElement("div");
    mRating.className= ""; //añadir clase
    mRating.textContent= movie.vote_average;

    const mFecha = document.createElement("p");
    mFecha.classList = "";
    mFecha.textContent = `${movie.release_date}`

    mCard.appendChild(mImg);
    mCard.appendChild(mTitulo)
    mCard.appendChild(mRating)
    mCard.appendChild(mFecha)

    return mCard;
}
