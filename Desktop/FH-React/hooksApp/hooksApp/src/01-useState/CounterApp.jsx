import React, {useState} from 'react'

const CounterApp = () => {

    const [counter,setCounter]=useState({
        counter1:0,
        counter2:0,
        counter3:0
    })


  return (
    <>
     <h1>Counter 1 :{counter.counter1}</h1>
     <h1>Counter 2 :{counter.counter2}</h1>
     <h1>Counter 3 :{counter.counter3}</h1>
     <hr></hr>
     <button className='btn' onClick={()=>setCounter({ ...counter, counter1: counter.counter1 + 1})} >Counter1 +1</button>   
     <button className='btn' onClick={()=>setCounter({ ...counter, counter2: counter.counter2 + 1})} >Counter2 +1</button>   
     <button className='btn' onClick={()=>setCounter({ ...counter, counter3: counter.counter3 + 1})} >Counter3 +1</button>   
    </>
  )
}

export default CounterApp