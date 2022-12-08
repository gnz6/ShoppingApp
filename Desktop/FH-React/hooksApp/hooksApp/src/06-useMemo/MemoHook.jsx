import React, { useMemo } from 'react'
import { useCounter } from "../hooks/useCounter"

const heavyStuff =(iterationNumber=100)=>{
    for(let i=0; i<iterationNumber;i++){
        console.log(iterationNumber[i])
    }
    return `${iterationNumber} iterations` 
}


const MemoHook = () => {
    const { counter, increment } = useCounter(10)

    const memoValue = useMemo(()=> heavyStuff(counter),[counter])


  return (

    <>
        {/* <h4>{heavyStuff(200)}</h4> */}
        <h4>{memoValue}</h4>
        <h1>Counter: {counter}</h1>
        {/* <Small value={counter} /> */}
        <hr />
        <button onClick={increment} className='btn btn-primary'>+1</button>

    </>
  )
}

export default MemoHook