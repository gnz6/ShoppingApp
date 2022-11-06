import React from 'react'

const CharacterDetail = ({id, name, birth_year}) => {

  return (

    <div class="text-white" key={id}>
        <h1>{name}</h1>
        <h3>Birth Year: {birth_year}</h3>
    </div>    

  )
}

export default CharacterDetail