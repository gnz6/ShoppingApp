import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../redux/slices/characters/characterActions'
import { getPlanet } from '../redux/slices/planets/planetActions'

const CharacterDetail = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const character = useSelector((state)=> state.character.character)
    const charHome = useSelector((state)=>state.planet.planet)
    const planetId = character.homeworld
    console.log("1",charHome);
    console.log("2",planetId);

    useEffect(()=>{
        dispatch(getCharacter(id))
        dispatch(getPlanet(planetId))
    },[dispatch])

    console.log(character);
    console.log(character);
    // console.log(id);

  return (
    <div>
        {!character?
    <div>
        <h1>Loading..</h1>
    </div>:
    <div class="text-white">
        <h1>{character.name}</h1>
        <h3>Birth Year: {character.birth_year}</h3>
        {/* <h3>Homeworld: {character.homeworld}</h3> */}
        <h3> Films: {character.films? character.films.map(f=> f + " "): "No films registered"}</h3>
        <h3> Species: {character.species? character.species.map(f=> f): "No species registered"}</h3>
        <h3> Starships: {character.starships? character.starships.map(f=> f): "No starships registered"}</h3>

    </div>    
    }
    </div>
  )
}

export default CharacterDetail