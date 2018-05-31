export function setPatience(patience){
    return{
        type: "SET_PATIENCE",
        payload: {
             id: patience._id, 
             name: patience.name,
             lastname: patience.lastname,
             age: patience.age,
             weight: patience.weight,
             height: patience.height,
             email: patience.email,
             number: patience.number,
        }
    }
}


export function setPatienceDB(patience){
    return dispatch => {
        fetch("http://127.0.0.1:5000/newPatient",{
            method: 'POST',
            headers : {"Content-type" : "application/json"},
            body: JSON.stringify(patience)
        })
        .then(response => response.json())
        .then(
            json =>  dispatch(setPatience(json),
            dispatch(getPatientsList())
        ))       
    }
}

export function patientsList(patients){
    return{
        type: "PATIENTS_LIST",
        payload: {
             patientsList: patients
        }
    }
}

export function getPatient(id){
    return dispatch => {
        fetch("http://127.0.0.1:5000/patient/"+id)
        .then(response => response.json())
        .then( function(json){
            dispatch(setPatience(json[0]))
        })    
    }
}

export function getPatientsList(){
    return dispatch => {
        fetch("http://127.0.0.1:5000/allPatients")
        .then(response => response.json())
        .then( function(json){
            dispatch(patientsList(json))
        })    
    }
}