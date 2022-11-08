import React from 'react'

const CharacterDetail = ({id, name, birth_year}) => {

  return (

    <div class="text-white p-2 flex flex-col h-28" key={id}>
        <h1 class=" text-center text-xl text-yellow-400">{name}</h1>
        <h3>Birth Year: {birth_year}</h3>
    </div>    

  )
}

export default CharacterDetail