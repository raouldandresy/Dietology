export default function reducer(state={
    open: false
},action){
    switch(action.type){
        case "OPEN_TOGGLE":{
            return {...state,open: action.payload}
            break;
        }
        case "CLOSE_TOGGLE":{
            return {...state,open: action.payload}
            break;
        }  
    }
    return state;
}