export function openToggle(){
    return{
        type: "OPEN_TOGGLE",
        payload:  true
    }
}

export function closeToggle(){
    return{
        type: "CLOSE_TOGGLE",
        payload:  false
    }
}