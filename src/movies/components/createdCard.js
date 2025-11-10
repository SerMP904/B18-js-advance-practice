import { createElement } from "react";
import { apiConfig } from "../fetch/ApiConfig.js";


let movieCounter = 0;

export function createCard(movie){

    if (movie.poster_path !== null){
        const mCard = document.createElement("div")
        mCard.className = ""; //añadir clase
        const mImg = document.createElement("img");
        mImg.className = "movie-poster";
        mImg.setAttribute("src", `https://image.tmdb.org/t/p/w300$${movie.poster_path}`)
        //esto puede ir aparte
        mImg.addEventListener("click", (event)=>{
            const detailedCard = document.querySelector("")
            get
        })
    }

    

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

export function createCardDetails(data, cast = []){

    const details = document.createElement("div")
    details.classList.add(`card${movieCounter}`)

    const mImg = document.createElement("img");
    mImg.className = "movie-poster"
    mImg.setAttribute("src", `https://image.tmdb.org/t/p/w300${data.poster_path}`)

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