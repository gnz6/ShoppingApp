import React, {memo} from 'react'

const Small = memo(({value}) => {
    console.log("rerererender");
  return (
    <small>
       <h1>Counter: </h1> {value}
    </small>
  )
})

export default Small