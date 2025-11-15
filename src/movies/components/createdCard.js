import { apiConfig } from "../fetch/ApiConfig";
import { showMovies } from "../functions/showMovies";

export function createCard(movie) {
  const mCard = document.createElement("div");
  mCard.className = "movie-card";
  //añadir clase
  const mImg = document.createElement("img");
  mImg.className = "movie-img";
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
  mTitulo.className = "movie-title"; //añadir clase
  mTitulo.textContent = movie.original_title;

  const mOverview = document.createElement("p");
  mOverview.className = "movie-overview"; //añadir clase

  const mRating = document.createElement("div");
  mRating.className = "movie-rating"; //añadir clase
  mRating.textContent = movie.vote_average;

  const mFecha = document.createElement("p");
  mFecha.classList = "movie-date"; //añadir clase
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

  //Aqui va un eventListener para los detalles

  return mCard;
}

//esta funcion está sin terminar
//esta funcion está sin terminar
//esta funcion está sin terminar

export function detailsCard(movie, castArray = [], crewArray = []) {
  const detailsCard = document.createElement("div");
  detailsCard.className = "detailMovie";

  console.log(movie);

  const movieInfo = document.createElement("div");
  movieInfo.className = "movieInfo";

  const movieImg = document.createElement("img");
  movieImg.className = "movieImage";
  movieImg.setAttribute("id-movie", movie.id);
  movieImg.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  );

  const movieTitle = document.createElement("h2");
  movieTitle.classname = "movieTitle";
  movieTitle.textContent = movie.original_title;

  const movieDescription = document.createElement("p");
  movieDescription.classname = "movieOverview";
  movieDescription.textContent = movie.overview;

  const castContainer = document.createElement("div");
  castContainer.classname = "";

  const crewContainer = document.createElement("div");
  crewContainer.classname = "";

  fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiConfig.apiClave}`
  )
    .then((response) => response.json())
    .then((data) => {
      const castArray = data.cast; // Get the actors (cast)
      const crewArray = data.crew; // Get the crew

      // Add actors (cast)
      castArray.forEach((actor) => {
        if (actor.profile_path !== null) {
          const castDiv = document.createElement("div");
          castDiv.classList.add("cast-div");
          const castImg = document.createElement("img");
          const castName = document.createElement("p");
          castImg.classList.add("cast-img");
          castImg.setAttribute("src", `https://image.tmdb.org/t/p/w200${actor.profile_path}`);
          castName.classList.add("cast-name");
          castName.textContent = actor.name;
          castDiv.append(castImg, castName);
          castContainer.appendChild(castDiv);
          console.log("actor")
        }
      });

      // Add crew members
      const crewContainer = document.createElement("div");
      crewContainer.className = "crewContainer";

      crewArray.forEach((member) => {
        if (member.profile_path !== null) {
          const crewDiv = document.createElement("div");
          crewDiv.classList.add("crew-div");
          const crewImg = document.createElement("img");
          const crewName = document.createElement("p");
          crewImg.classList.add("crew-img");
          crewImg.setAttribute("src", `https://image.tmdb.org/t/p/w200${member.profile_path}`);
          crewName.classList.add("crew-name");
          crewName.textContent = member.name;
          crewDiv.append(crewImg, crewName);
          crewContainer.appendChild(crewDiv);
          console.log("crew")
        }
      })});


  detailsCard.appendChild(movieImg);
  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(movieDescription);
  movieInfo.appendChild(castContainer);
  movieInfo.appendChild(crewContainer);
  detailsCard.appendChild(movieInfo);
  //release date
  //crew
  return detailsCard;
}
