import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

const Layout = () => {

    const { counter, increment } = useCounter(1)
    const [boxsize, setBoxsize] = useState({
        width: 0, heigth: 0
    })

    const pRef = useRef()
    useLayoutEffect(() => {

        const { width, heigth } = pRef.current.getBoundingClientRect()
        setBoxsize({ width, heigth })

    }, [])

    const url = ` https://www.breakingbadapi.com/api/quotes/${counter}`

    const { data, isLoading, hasError } = useFetch(url)


    return (
        <div>
            <h1>Braking Bad Quotes</h1>
            <hr />

            {isLoading ?

                <div className='alert alert-info text-center'>
                    <h3>Loading...</h3>
                </div>
                :
                hasError ?
                    <div className='alert alert-danger text-center'>
                        <h3>Server Error</h3>
                    </div>
                    :
                    <blockquote className='blockquote text-end' style={{ display: "flex" }}>
                        <p ref={pRef} className='mb-1'> {data.quote[0]}</p>
                        <footer className='blockquote-footer'>{data.author[0]}</footer>
                    </blockquote>
            }

            <button disabled={isLoading} onClick={increment} className='btn btn-primary'>Next Quote</button>
        </div>
    )
}

export default Layout