import React from 'react'

const PlanetCard = ({_id, name, terrain, diameter}) => {

  return (

    <div cclass="text-white p-2 flex flex-col h-28" key={_id}>
        <h1 class=" text-center text-xl text-yellow-400"> {name}</h1>
        <h3 >Terrain: <span class="font-bold">{terrain}</span></h3>
        <h3>Diameter: <span class="font-bold">{diameter} km</span></h3>
    </div>    

  )
}

export default PlanetCard