export function getDiets(diets){
    return{
        type: "DIET_LIST",
        payload:  diets
    }
}

export function getDiet(diet){
    return{
        type: "DIET",
        payload:  diet
    }
}

export function getDietsList(idPatient){
    return dispatch => {
        fetch("http://127.0.0.1:5000/diet/"+idPatient,{
            method: 'GET',
            headers : {"Content-type" : "application/json"}
        })
        .then(response => response.json())
        .then(function(json){  
            if(json.length > 0){
                dispatch(getDiets(json));
            }
         })       
    }
}

export function getDietId(id){
    return dispatch => {
        fetch("http://127.0.0.1:5000/dietId/"+id,{
            method: 'GET',
            headers : {"Content-type" : "application/json"}
        })
        .then(response => response.json())
        .then(function(json){  
            if(json.length > 0){
                dispatch(getDiet(json[0]));
            }
         })       
    }
}

export function setDiet(diet){
    return dispatch => {
        fetch("http://127.0.0.1:5000/newDiet",{
            method: 'POST',
            headers : {"Content-type" : "application/json"},
            body: JSON.stringify(diet)
        })
        .then(response => response.json())
        .then(function(json){
            if(json.length > 0){
                dispatch(getDiets(json));
            }
        })       
    }
}