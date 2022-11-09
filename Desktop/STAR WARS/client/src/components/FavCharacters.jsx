import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getUserByEmail } from '../redux/slices/auth/authActions'
import { getAllCharacters } from '../redux/slices/characters/characterActions'
import { removeFavs } from '../redux/slices/favs/favActions'

const FavCharacters = () => {
    const auth = JSON.parse(window.localStorage.getItem("token"))
    const userId = auth.findUser._id
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const handleHome =(e)=>{
    e.preventDefault()
    navigate("/home")
  }

    const [charId , setCharId] = useState("")

    useEffect(()=>{
      dispatch(getAllCharacters())
          dispatch(getUserByEmail(userId))
        },[dispatch, userId])
    
    const user = useSelector(state=>state.auth.user)
    const allchars = useSelector(state=>state.character.allChars)
    const userFavs = user.favs
    const favs = allchars.filter(f=> userFavs.includes(f._id)) 


    const handleRemoveFav = (e)=>{
      e.preventDefault();
      setCharId(e.target.value)
      const user_id = user._id
      console.log(charId);
      dispatch(removeFavs(charId, user_id))
  }

    return (
    <div class="bg-black bg-opacity-60 h-screen">
      {userId.length?
      <div class="pt-4">
        <h1  class="text-yellow-400 text-3xl text-center items-center font-bold">{user.name}</h1>
        <h1  class="text-yellow-400 text-xl text-center items-center font-bold"><span class="text-gray-200 text-lg pt-2 text-center items-center " >user email:</span> {user.email}</h1>
        <div>
        <h2 class="text-gray-200 text-2xl pt-2 text-center items-center font-bold pb-4">Favourite Characters</h2>
        {user.favs?
        <div class="max-w-screen w-screen flex py-8 items-center content-center justify-center  flex-wrap bg-black bg-opacity-80">
          {favs.map(f=> 
           <NavLink key={f.name} to={`/character/${f._id}`}>
           <div key={f.name} class="text-white p-6 m-2 flex h-auto items-center justify-between  border border-yellow-500 rounded-md bg-gray-800 bg-opacity-10">
            <h1 class=" font-xl w-2/3 max-h-[50px] h-[40px] p-2 flex-1 text-center font-bold">{f.name}</h1>
            <button class="bg-black text-gray-200  w-[30px] h-[30px] items-center justify-center text-center font-extrabold border-yellow-400 rounded-md text-md hover:bg-yellow-400 hover:text-black" type="button" onClick={handleRemoveFav} value={f._id}> X </button> 
            </div>
           </NavLink>
            )}
        </div>:
        <div class="flex flex-col items-center justify-center">
         <h1 class="text-yellow-400 text-lg pt-2 text-center items-center font-bold pb-8"> No favs added yet! </h1>
         <button onClick={handleHome} class="bg-black text-gray-200 w-52 h-20 border border-yellow-400 rounded-md text-xl hover:text-yellow-400"> Return Home </button>
        </div>  
      }
        </div>
      </div>
      :
      <div w-screen h-screen items-center justify-center>
        <h1 class="text-yellow-400 text-6xl text-center items-center">401</h1>
        <h2  class="text-yellow-400 text-4xl text-center items-center">Unauthorized access</h2>
        </div>}
    </div>
  )
}

export default FavCharacters