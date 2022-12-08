import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import Message from './Message'

const FormCustomHook = () => {

  const {input, handleInputChange, handleReset} = useForm({username:"", email:"", password:""})

  return (
    <>
     <h1>Form Custom</h1>
     <input type={"text"} className="form-control" placeholder='username' name='username' value={input.username} onChange={handleInputChange}/>   
     <input type={"email"} className="form-control mt-2" placeholder='email' name='email' value={input.email} onChange={handleInputChange}/>   
     <input type={"password"} className="form-control mt-2" placeholder='password' name='password' value={input.password} onChange={handleInputChange}/>   

    {
       ( input.username === "") && <Message/>
    }

    <button onClick={handleReset} className='btn btn-primary mt-2'>Clear Form</button>
    </>
  )
}

export default FormCustomHook