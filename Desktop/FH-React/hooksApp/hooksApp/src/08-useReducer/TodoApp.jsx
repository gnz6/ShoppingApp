import React, { useEffect, useReducer } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { todoReducer } from './todoReducer'

const initialState = []

const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const onNewTodo = (newTodo) => {
        const action = {
            type: "ADD_TODO",
            payload: newTodo
        }
        dispatch(action)
    }

    const completeTodo = (id) => {
        // console.log({ id });
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

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">
                <div className='col-7'>
                    <TodoList className='list-group'
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        completeTodo= {completeTodo}
                    />
                </div>
                <div className='col-5'>
                    <h4> Add Todo </h4>
                    <hr />
                    <AddTodo
                        onNewTodo={onNewTodo} />
                </div>
            </div>

        </>
    )
}

export default TodoApp