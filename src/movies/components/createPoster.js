

export function createPoster(movie){

    mPoster = document.createElement("div");
    mPoster.className = ""; //añadir clase

    pImg = document.createElement("img");
    pImg.className = ""; //añadir clase
    pImg.setAttribute("src", `${baseUrl}${movie.poster_path}`)

    pInfo = document.createElement("div")
    pSinopsis = document.createElement("p")
    pSinopsis.className = ""

    pCasting = document.createElement("div");
    
    pActores = document.createElement("div");
    pActoresPortrait = document.createElement("img")
    pActoresName = document.createElement("p")
}