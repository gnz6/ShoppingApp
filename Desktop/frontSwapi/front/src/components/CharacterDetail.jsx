import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../redux/slices/characters/characterActions'

const CharacterDetail = () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getCharacter(id))
    },[dispatch])

    const character = useSelector(state=> state.character)


  return (
    <div>
        {!character || character.id !== id?
    <div>
        <h1>Loading..</h1>
    </div>:
    <div>
        <h1>{character.name}</h1>
        <h3>{character.birth_year}</h3>
        <h3>{character.homeworld}</h3>
        <h3>{character.films[0]? character.films.map(f=> f): "No films registered"}</h3>
        <h3>{character.species[0]? character.species.map(f=> f): "No species registered"}</h3>
        <h3>{character.starships[0]? character.starships.map(f=> f): "No starships registered"}</h3>

    </div>    
    }
    </div>
  )
}

export default CharacterDetail