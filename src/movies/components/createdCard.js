import { apiConfig } from "../fetch/ApiConfig";
import { getMovies } from "../fetch/movieList";
import { cardDetails } from "../functions/showMovies";

let movieCounter = 0;

export function createCard(movie){

    const mCard = document.createElement("div");
    mCard.className = "movie-card";
     //añadir clase
    const mImg = document.createElement("img");
    mImg.className = "movie-img";
    mImg.setAttribute("src", `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
    mImg.setAttribute("id", "movieImg")

    const mInfo = document.createElement("div");

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
    
    const mTitulo = document.createElement("h1");
    mTitulo.className = "movie-title" //añadir clase
    mTitulo.textContent = movie.original_title;

    const mOverview = document.createElement("p");
    mOverview.className = "movie-overview"; //añadir clase

    const mRating = document.createElement("div");
    mRating.className= "movie-raing"; //añadir clase
    mRating.textContent= movie.vote_average;

    const mFecha = document.createElement("p");
    mFecha.classList = "movie-date"; //añadir clase
    mFecha.textContent = `${movie.release_date}`

    mImg.addEventListener("click", () => {
      const detailsCardDiv = document.querySelector(".detailMovie");
      getMovies(detailsCardDiv, movie.id); //esta llamada puede ser problematica
    });

    mCard.appendChild(mImg)

    mInfo.appendChild(mTitulo)
    mInfo.appendChild(mOverview)
    mInfo.appendChild(mRating)
    mInfo.appendChild(mFecha)

    mCard.appendChild(mInfo)

    //Aqui va un eventListener para los detalles
    


    return mCard;
}

//esta funcion está sin terminar
//esta funcion está sin terminar
//esta funcion está sin terminar
export function detailsCard(movie, castArray = []) {
  const detailsCard = document.createElement("div");
  detailsCard.classList.add("detail-card");
  detailsCard.classList.add(`card${++moviecounter}`);

  const movieImg = document.createElement("img");
  movieImg.classList.add("movie-img");
  movieImg.setAttribute("id-movie", movie.id);
  movieImg.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  );

  const movieTitle = document.createElement("h2");
  movieTitle.classList.add("movie-title");
  movieTitle.textContent = movie.original_title;

  const movieDescription = document.createElement("p");
  movieDescription.classList.add("detail-description");
  movieDescription.textContent = movie.overview;

  const castContainer = document.createElement("div");
  castContainer.classList.add("cast-container");

  castArray.forEach((actor) => {
      
      
      if (actor.profile_path !== null) {
          const castDiv = document.createElement("div");
          castDiv.classList.add("cast-div");
          const castImg = document.createElement("img");
        const castName = document.createElement("p");
        castImg.classList.add("cast-img");
        castImg.src = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;
        castName.classList.add("cast-name");
        castName.textContent = actor.name;
        castDiv.append(castImg, castName);
        castContainer.appendChild(castDiv);
    }
    

    console.log(actor.profile_path);

  });