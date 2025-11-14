export function createButton(mode){
    const button = document.createElement("button")
    const bImg = document.createElement("img")
    if (mode === "grid"){
        button.className="buttonGrid"
        bImg.setAttribute("src", "grid-layout.svg")
        button.appendChild(bImg)
    } 
    if (mode === "rows") {
        button.className="buttonRows"
        bImg.setAttribute("src", "list-layout.svg")
        button.appendChild(bImg)
    }
    return button;
}