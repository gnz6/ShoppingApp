import React from 'react'

const TodoItem = ({id, description, done, handleDeleteTodo, completeTodo}) => {


    return (
    <li key={id} className='list-group-item d-flex justify-content-between'>
        <h1 onClick={()=> completeTodo(id)} className={`align-self-item ${done && "text-decoration-line-through"}`}> {description} </h1>
        <button className='btn btn-danger' onClick={()=>handleDeleteTodo(id)}> X </button> 
    </li>
  )
    }

export default TodoItem