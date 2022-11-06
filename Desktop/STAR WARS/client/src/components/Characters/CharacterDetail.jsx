import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../../redux/slices/characters/characterActions'

const CharacterDetail = () => {
  
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getCharacter(id))
    },[dispatch])
  
    const character = useSelector(state=>state.character.character)
    console.log(character);
    return (
    <div class="text-white">
        <h1>{character.name}</h1>
        
        <p>Birth Year: {character.birth_year}</p>
        <h2>Native Planet: {character.homeworld}</h2>
        <h2>Appeared in :{character.films?character.films.map(m=> `- ${m} `):"No movies"}</h2>
        <h3>Specie: {character.specie}</h3>
    </div>
  )
}

export default CharacterDetail