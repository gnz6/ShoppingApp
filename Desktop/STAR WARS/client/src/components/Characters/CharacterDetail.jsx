import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../../redux/slices/characters/characterActions'
import { addFavs, removeFavs } from '../../redux/slices/favs/favActions'
import Loader from '../Loader'

const CharacterDetail = () => {
  
    const dispatch = useDispatch()
    const {id} = useParams()
    // const auth = JSON.parse(localStorage.getItem("token")) || ""

 
    useEffect(()=>{
        dispatch(getCharacter(id))

    },[dispatch, id])
  
    const character = useSelector(state=>state.character.character)
    const user = useSelector(state=>state.auth.user)
    
    // let arrayCondition = user.favs.includes(character._id)
    
    const handleAddFav = (e)=>{
        e.preventDefault();
        const user_id = user._id
    
        dispatch(addFavs(id, user_id))
        alert(`${character.name} added to favs`)
        window.location.reload()
    }

    const handleRemoveFav = (e)=>{
        e.preventDefault();
        const user_id = user._id
        console.log("user",user_id);
        console.log("id",id);
        dispatch(removeFavs(id, user_id))
        // alert(`${character.name} removed from favs`)
        // window.location.reload()
    }

    console.log(user);


    return (
    <div class="text-white w-full items-center justify-center h-screen bg-black bg-opacity-60 p-10">
        {id === character._id?
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row p-4">
        <h1 class="text-4xl font-bold text-yellow-400 text-center pr-4">{character.name} </h1>

            {user.favs.includes(character._id)?
        <div>
            <button class="bg-yellow-400 text-gray-800 w-40 h-10 border  border-yellow-400 rounded-md text-xl hover:bg-black hover:text-yellow-400" type="button" onClick={handleRemoveFav}> Remove Fav </button> 
        </div>
        :
        <div>
            <button class="bg-black text-gray-200 w-40 h-10 border  border-yellow-400 rounded-md text-xl hover:text-yellow-400" type="button" onClick={handleAddFav}>Add Fav</button> 
        </div>    
        }
            </div>
        
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