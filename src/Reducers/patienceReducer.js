export default function reducer(state={
    id:'',
    name:'',
    lastname:'',
    age:'',
    weight:'',
    height:'',
    email:'',
    number:'',
    patientsList:[]
},action){
    switch(action.type){
        case "SET_PATIENCE":{
            return {...state,
                id: action.payload.id,
                name: action.payload.name,
                lastname: action.payload.lastname,
                age: action.payload.age,
                weight: action.payload.weight,
                height: action.payload.height,
                email: action.payload.email,
                number: action.payload.number
            }
            break;
        } 
        case "PATIENTS_LIST":{
            return {...state,
                patientsList: action.payload.patientsList
            }
            break;
        } 
        default:
            return state;
    }
}