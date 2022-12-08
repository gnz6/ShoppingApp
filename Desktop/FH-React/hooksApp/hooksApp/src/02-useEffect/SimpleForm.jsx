import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [input, setInput]= useState({username:"", email:""})

    const handleInputChange =(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        // console.log("EmailChange");
    },[input.email])


  return (
    <>
     <h1>Form</h1>
     <input type={"text"} className="form-control" placeholder='username' name='username' value={input.username} onChange={handleInputChange}/>   
     <input type={"email"} className="form-control mt-2" placeholder='email' name='email' value={input.email} onChange={handleInputChange}/>   

    {
       ( input.username === "") && <Message/>
    }
    </>
  )
}

export default SimpleForm