import { movieType } from "../fetch/ApiConfig";
import { createSelectListener } from "../components/createEventListeners";

export function selectMovie(){
    const selectElement = document.createElement("select")

    const arrayCat = Object.entries(movieType);
    arrayCat.forEach(cat => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", cat[1])
        optionElement.text = cat[0];
        
        selectElement.appendChild(optionElement)
    })
    
    createSelectListener(selectElement);
    return selectElement
}