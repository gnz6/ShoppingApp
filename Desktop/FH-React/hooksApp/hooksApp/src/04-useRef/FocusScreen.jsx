import React,{useRef} from 'react'

const FocusScreen = () => {
    const inputRef = useRef()

    const onClickRef =()=>{
        // console.log(inputRef);
        inputRef.current.select()
    }
  return (
    <>

     <h1>Focus</h1>
     <hr/>   

     <input type={"text"} placeholder="Insert Name.." className='form-control' ref={inputRef} />

     <button className='btn btn-primary' onClick={onClickRef}>
        Focus
     </button>
    </>
  )
}

export default FocusScreen