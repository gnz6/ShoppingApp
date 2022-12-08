
const initialState = [{
    id:1,
    todo:"Lo mismo que todas las noches Pinky, tratar de conquistar el mundo",
    done: false
}]


const cerebroReducer = (state = initialState, action = {})=>{
    
    switch(action.type){
        case "ADD_TODO":{
            return [...state, action.payload]
        }
    }
    return state
}
