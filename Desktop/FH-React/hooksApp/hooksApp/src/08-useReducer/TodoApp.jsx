import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        description: "Cazar Holandeses",
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: "Cazar Brazucas",
        done: false
    },
]

const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState)

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">
                <div className='col-7'>
                    <ul className='list-group '>
                        <li className='list-group-item d-flex justify-content-between'><span className='align-self-center'>Un Item</span> <button className='btn btn-outline-danger'>X</button></li>
                    </ul>
                </div>
                <div className='col-5'>
                    <h4> Add Todo</h4>
                    <hr />
                    <form>
                        <input
                            type={"text"}
                            placeholder="Add Todo"
                            className='form-control'
                        />
                        <button type='submit' className='btn btn-outline-primary mt-1'> ADD</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default TodoApp