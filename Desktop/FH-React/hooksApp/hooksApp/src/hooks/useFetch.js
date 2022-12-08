import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError: null
    })
  
    const getQuotes = async()=>{
       const resp = await fetch(url)
       const data = await resp.json()

       if(data.name !== "error"){

           setState({
               data,
               isLoading:false,
               hasError: false
            })
        }else{

        setState({
            ...state,
            isLoading: false,
            hasError:true
        })}
    }
        
    
  
  useEffect(()=>{
    getQuotes()
  },[url])
  
    return{
        ...state,
    }
}