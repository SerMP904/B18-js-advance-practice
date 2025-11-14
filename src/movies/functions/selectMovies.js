import { movieType } from "../fetch/ApiConfig";
<<<<<<< HEAD
import { createSelectListener } from "../components/createEventListeners";
=======
>>>>>>> fdf0c48ca9de39889cb636ae8c599e47622f751d

export function selectMovie(){
    const selectElement = document.createElement("select")

    const arrayCat = Object.entries(movieType);
    arrayCat.forEach(cat => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", cat[1])
        optionElement.text = cat[0];
<<<<<<< HEAD
        
        selectElement.appendChild(optionElement)
    })
    
    createSelectListener(selectElement);
    return selectElement
=======
        selectElement.appendChild(optionElement)
    })

    createSelectListener(selectElement);
    return selectElement

>>>>>>> fdf0c48ca9de39889cb636ae8c599e47622f751d
}