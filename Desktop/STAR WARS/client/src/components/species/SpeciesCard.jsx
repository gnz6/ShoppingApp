import React from 'react'

const SpeciesCard = ({_id, name, language}) => {

  return (

    <div class="text-white p-2 flex flex-col h-28" key={_id}>
        <h1 class=" text-center text-xl text-yellow-400"> {name}</h1>
        <h3>Language: <span class="font-bold">{language}</span></h3>
    </div>    

  )
}

export default SpeciesCard