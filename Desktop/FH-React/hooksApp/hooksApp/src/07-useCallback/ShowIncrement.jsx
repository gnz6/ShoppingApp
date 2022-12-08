import React from 'react'

const ShowIncrement = ({increment}) => {
  return (
    <>
        <button className='btn btn-primary' onClick={increment}> Incrementar</button>
    </>
  )
}

export default ShowIncrement