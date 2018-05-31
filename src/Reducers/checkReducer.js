export default function reducer(state={
    id: '',
    idPatient:'',
    date:'',
    note:'',
    checks:[]
},action){
    switch(action.type){
        case "CHECK":{
            return {...state,id: action.payload.id,idPatient: action.payload.idPatient,date: action.payload.date}
            break;
        }
        case "CHECK_NOTE":{
            return {...state,checks: action.payload}
            break;
        }
    }
    return state;
}