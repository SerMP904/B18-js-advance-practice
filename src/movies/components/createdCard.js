import { apiConfig } from "../fetch/ApiConfig";
import { showMovies } from "../functions/showMovies";
import { getMovies } from "../fetch/movieList";

export function createCard(movie) {
  const mCard = document.createElement("div");
  mCard.className = "movieCard";

  const mImg = document.createElement("img");
  mImg.className = "movieImg";
  mImg.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  );
  mImg.setAttribute("id", "movieImg");

  const mInfo = document.createElement("div");

  fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiConfig.apiClave}&language=es-ES`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("no hay sinopsis" + response.status);
      }
      return response.json();
    })
    .then((data) => {
      mOverview.textContent = data.overview;
    })
    .catch((error) => {
      console.error("Error en la sinopsis:", error);
    });

  const mTitulo = document.createElement("h1");
  mTitulo.className = "movieTitle"; 
  mTitulo.textContent = movie.original_title;

  const mOverview = document.createElement("p");
  mOverview.className = "movieOverview"; 

  const mRating = document.createElement("div");
  mRating.className = "movieRating"; 
  mRating.textContent = movie.vote_average;

  const mFecha = document.createElement("p");
  mFecha.classList = "movieDate"; 
  mFecha.textContent = `${movie.release_date}`;

  mImg.addEventListener("click", () => {
    showMovies(movie, mCard);
    return mCard;
  });

  mCard.appendChild(mImg);
  mInfo.appendChild(mTitulo);
  mInfo.appendChild(mOverview);
  mInfo.appendChild(mRating);
  mInfo.appendChild(mFecha);

  mCard.appendChild(mInfo);

  return mCard;
}

export function detailsCard(movie, typelist) {
  
  const detailsCard = document.createElement("div")
  detailsCard.className="detailMovie"
  console.log(detailsCard);

  const movieDisplay = document.querySelector("#movieDisplay")
  const displayClass = movieDisplay.className
  movieDisplay.className="movieNull1"

  const movieInfo = document.createElement("div");
  movieInfo.className = "movieInfo";

  const movieImg = document.createElement("img");
  movieImg.className = "movieImage";
  movieImg.setAttribute("id-movie", movie.id);
  movieImg.setAttribute("src",`https://image.tmdb.org/t/p/w300${movie.poster_path}`);

  const movieTitle = document.createElement("h2");
  movieTitle.className = "movieTitle";
  movieTitle.textContent = movie.original_title;

  const movieDescription = document.createElement("p");
  movieDescription.className = "movieOverview";
  movieDescription.textContent = movie.overview;

  const movieDate = document.createElement("p");
  movieDate.classList = "movieDate"; 
  movieDate.textContent = `${movie.release_date}`

  const castContainer = document.createElement("div");
  castContainer.className = "castContainer";

  const crewContainer = document.createElement("div");
  crewContainer.className = "crewContainer";

  fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiConfig.apiClave}`
  )
    .then((response) => response.json())
    .then((data) => {
      const castArray = data.cast;
      const crewArray = data.crew;


      castArray.forEach((actor) => {
        if (actor.profile_path !== null) {
          const castDiv = document.createElement("div");
          castDiv.className ="castDiv";
          const castImg = document.createElement("img");
          const castName = document.createElement("p");
          castImg.className="castImg";
          castImg.setAttribute("src", `https://image.tmdb.org/t/p/w200${actor.profile_path}`);
          castName.className="castName";
          castName.textContent = actor.name;
          castDiv.append(castImg, castName);
          castContainer.appendChild(castDiv);
        }
      });

      crewArray.forEach((member) => {
        if (member.profile_path !== null) {
          const crewDiv = document.createElement("div");
          crewDiv.className="crewDiv";
          const crewImg = document.createElement("img");
          const crewName = document.createElement("p");
          crewImg.className="crewImg"; 
          crewImg.setAttribute("src", `https://image.tmdb.org/t/p/w200${member.profile_path}`);
          crewName.className= "crewName";
          crewName.textContent = member.name;
          crewDiv.append(crewImg, crewName);
          crewContainer.appendChild(crewDiv);
          console.log("crew")
        }
      })});
  
  const secondaryDiv = document.createElement("div")
  secondaryDiv.className="imgDiv"

  const gridButton = document.querySelector("#gridButton")
  gridButton.className="buttonNull"
  const rowButton = document.querySelector("#rowButton")
  rowButton.className="buttonNull";

  const returnButton = document.querySelector("#returnButton")
  returnButton.className="returnButton"
  
  returnButton.addEventListener("click", ()=>{
    
    detailsCard.remove();

    movieDisplay.className = displayClass;
    movieDisplay.className= displayClass

    gridButton.className="buttonGrid"
    rowButton.className="buttonRow"
    returnButton.className="buttonNull"
    
    const movieGrid = document.querySelector("#movieDisplay"); 
    movieGrid.innerHTML = "";  

    getMovies(movieGrid, typelist);
  })

  secondaryDiv.appendChild(movieImg);
  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(movieDescription);
  movieInfo.appendChild(movieDate);
  movieInfo.appendChild(castContainer);
  movieInfo.appendChild(crewContainer);
  detailsCard.appendChild(secondaryDiv);
  detailsCard.appendChild(movieInfo);

  return detailsCard;
}
