import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserByEmail } from '../redux/slices/auth/authActions'
 import { getUser } from '../redux/slices/auth/authSlice'

const FavCharacters = () => {
    const auth = JSON.parse(window.localStorage.getItem("token"))
    const userId = auth.findUser._id
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const handleHome =(e)=>{
    e.preventDefault()
    navigate("/home")
  }


    useEffect(()=>{
          dispatch(getUserByEmail(userId))
        },[dispatch, userId])
    
    const user = useSelector(state=>state.auth.user)
        console.log(user);
    return (
    <div class="bg-black bg-opacity-60 h-screen">
      {userId.length?
      <div class="pt-4">
        <h1  class="text-yellow-400 text-3xl text-center items-center font-bold">{user.name}</h1>
        <h1  class="text-yellow-400 text-xl text-center items-center font-bold"><span class="text-gray-200 text-lg pt-2 text-center items-center " >user email:</span> {user.email}</h1>
        <div>
        <h2 class="text-gray-200 text-2xl pt-2 text-center items-center font-bold pb-4">Favourite Characters</h2>
        {user.favs?
        <div>

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