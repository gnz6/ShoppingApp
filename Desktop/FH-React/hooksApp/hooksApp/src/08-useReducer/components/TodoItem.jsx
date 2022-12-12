import React from 'react'

const TodoItem = ({id, description, done, handleDeleteTodo, completeTodo}) => {


    return (
    <li key={id} className='list-group-item d-flex justify-content-between'>
        <button onClick={()=> completeTodo(id)} className={`align-self-item ${done && "text-decoration-line-through"}`}> {description} </button>
        <button className='btn btn-danger' onClick={()=>handleDeleteTodo(id)}>Delete Todo </button> 
    </li>
  )
    }

export default TodoItem