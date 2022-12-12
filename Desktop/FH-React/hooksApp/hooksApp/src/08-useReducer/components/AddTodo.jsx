import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'

const AddTodo = ({onNewTodo}) => {

    const {description,handleInputChange, handleReset}=useForm({
        description:""})
    

    const handleAddTodo = (e)=>{
        e.preventDefault()
        if(description.length <=1) return;
        
        const newTodo = {
            id: new Date().getTime() * 3,
            description: description,
            done: false
        }
        onNewTodo(newTodo)
        handleReset()
    }

  return (
    <form onSubmit={handleAddTodo}>
        <input value={description} name={"description"} onChange={handleInputChange} className='form-control' placeholder='Add Todo' type={"text"}/>
        <button type='submit' className='btn btn-primary'> Add Todo </button>
    </form>
  )
}

export default AddTodo