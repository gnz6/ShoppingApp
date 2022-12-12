export const todoReducer = (initialState=[], action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...initialState , action.payload]
       
         case "COMPLETE_TODO":
            return initialState.map((todo)=>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done : !todo.done
                    }
                }
                return todo
            })
       
         case "DELETE_TODO":
            return  initialState.filter( todo=> todo.id !== action.payload )
        
        default: 
            return initialState
    }
}