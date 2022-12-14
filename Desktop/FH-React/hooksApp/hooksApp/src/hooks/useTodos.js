import { useReducer, useEffect } from "react"

export const useTodos = (reducer) => {

    const initialState = []



    
    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || []
    }

    const [todos, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])




    const allTodos = todos.length
    
    const filterTodos = todos.filter(todo=> todo.done === false);
    
    const pending = filterTodos.length

    const onNewTodo = (newTodo) => {
        const action = {
            type: "ADD_TODO",
            payload: newTodo
        }
        dispatch(action)
    }

    const completeTodo = (id) => {
        dispatch({
            type: "COMPLETE_TODO",
            payload: id
        })
    }

    const handleDeleteTodo = (id) => {
        console.log({ id });
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    }

  return {
    todos, handleDeleteTodo, completeTodo, onNewTodo, allTodos, pending

  }
  
}
