import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../../redux/slices/characters/characterActions'
import Loader from '../Loader'

const CharacterDetail = () => {
  
    const dispatch = useDispatch()
    const {id} = useParams()


    useEffect(()=>{
        dispatch(getCharacter(id))
    },[dispatch, id])
  
    const character = useSelector(state=>state.character.character)
    const user = JSON.parse(localStorage.getItem("token"))
    return (
    <div class="text-white w-full items-center justify-center h-screen bg-black bg-opacity-60 p-10">
        {id === character._id?
        <div>
        <h1 class="text-4xl font-bold text-yellow-400 text-center ">{character.name} </h1>
        <button>Add Fav</button> 
        
        <h2 class="text-xl text-bold text-center pt-10">Birth Year: <span class="text-2xl text-yellow-400 ">{character.birth_year}</span></h2>
        <h2 class="text-xl text-bold text-center">Native Planet:<span class="text-2xl text-yellow-400 "> {character.homeworld} </span></h2>
        <h3 class="text-xl text-bold text-center">Specie: <span class="text-2xl text-yellow-400 ">{character.specie} </span></h3>
        <h2 class="text-xl text-bold text-center">Appeared in :<span class ="text-yellow-400 text-2xl font-bold inline-block">{character.films?character.films.map(m=> `◽ ${m} `):"No movies"} </span></h2>
        </div>
        :
        <div>
        <Loader/>    
        </div>}
       
    </div>
  )
}

export default CharacterDetail