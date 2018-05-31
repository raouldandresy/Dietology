export function getChecks(check){
    return{
        type: "CHECK",
        payload:  check
    }
}

export function getCheckNote(checks){
    return{
        type: "CHECK_NOTE",
        payload:  checks
    }
}

export function getChecksList(idPatient){
    return dispatch => {
        fetch("http://127.0.0.1:5000/check/"+idPatient,{
            method: 'GET',
            headers : {"Content-type" : "application/json"}
        })
        .then(response => response.json())
        .then(function(json){  
            if(json.length > 0){
                dispatch(getChecks(json));
                dispatch(getCheckNote(json));
            }
         })       
    }
}

export function setCheck(check){
    return dispatch => {
        fetch("http://127.0.0.1:5000/newCheck",{
            method: 'POST',
            headers : {"Content-type" : "application/json"},
            body: JSON.stringify(check)
        })
        .then(response => response.json())
        .then(function(json){
            if(json.length > 0){
                dispatch(getChecks(json));
                dispatch(getCheckNote(json));
            }
        })       
    }
}