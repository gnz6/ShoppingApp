import React from 'react'

const SpeciesCard = ({_id, name, language}) => {

  return (

    <div class="text-white" key={_id}>
        <h3> {name}</h3>
        <h1>Language :{language}</h1>
    </div>    

  )
}

export default SpeciesCard