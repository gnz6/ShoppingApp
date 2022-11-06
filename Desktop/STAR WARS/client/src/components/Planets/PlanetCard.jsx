import React from 'react'

const PlanetCard = ({_id, name, terrain, diameter}) => {

  return (

    <div class="text-white" key={_id}>
        <h3>Planet {name}</h3>
        <h1>Terrain :{terrain}</h1>
        <h3>Diameter: {diameter} km </h3>
    </div>    

  )
}

export default PlanetCard