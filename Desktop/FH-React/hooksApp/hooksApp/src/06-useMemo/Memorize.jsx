import React from 'react'
import { useCounter } from "../hooks/useCounter"
import Small from './Small'

const Memorize = () => {

    const { counter, increment } = useCounter(10)

    return (
        <>
            <Small value={counter} />
            <hr />
            <button onClick={increment} className='btn btn-primary'>+1</button>

        </>
    )
}

export default Memorize