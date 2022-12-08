import { useState, useEffect } from "react"
export const useForm =(initialForm = {})=>{

    
    const [input, setInput]= useState(initialForm)

    const handleInputChange =(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleReset = ()=>{
        setInput(initialForm)
    }

     useEffect(()=>{

    },[input])

    return{
        ...input,
        input,
        handleInputChange,
        handleReset
    }
}