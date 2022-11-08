import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from "../assets/Star_Wars_Logo..png"
import useLocalStorage from '../hooks/useLocalStorage'
import { logOutUser } from '../redux/slices/auth/authActions'

const Nav = () => {

  const auth = JSON.parse(localStorage.getItem("token"))
  const googleAuth = JSON.parse(localStorage.getItem("googleUser"))
  const [googleUser, setGoogleUser] = useLocalStorage("googleUser")

  const dispatch = useDispatch()
  //  console.log(googleAuth);
  //  console.log(auth);
const handleLogout=(e)=>{
  e.preventDefault()
  setGoogleUser(null)
  dispatch(logOutUser())
  window.location.reload()
}


  return (
    <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-black bg-opacity-90 w-screen flex justify-evenly">
  <div class="container flex  items-center  bg-black bg-opacity-10">
    <div class="flex items-center">
       <NavLink to={"/"}>
        <img src={logo} class="h-20"  alt="Star Wars" />
       </NavLink>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="flex justify-end w-full "  id="navbar-default">
      <div class="flex justify-end h-10">
      
          {/* <NavLink to="/home" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-500 md:p-0 dark:text-white" aria-current="page">
            <button class="text-white hover:text-yellow-400">
              Home
              </button>
            </NavLink> */}
      
      
      
      {!auth && !googleAuth?
        <div class="font-xl px-2 flex justify-center items-center">
                <div>

          <NavLink to="/login" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <button class="text-white hover:text-yellow-400">
              Login
              </button>
            </NavLink>
                </div>
        <div class="font-xl px-2">

          <NavLink to="/register" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <button class="text-white hover:text-yellow-400">Register</button>
            </NavLink>
     
        </div>

        </div>
        :
        auth !== null ?
        <div class="text-white flex border border-yellow-400 p-4 items-center rounded-md">
          <div class="p-4 items-center justify-center  hover:text-yellow-300 hover:underline">
            <NavLink to={"/user"}>
              <button>{auth.findUser.name}</button>
            </NavLink>
        </div>
        <div class="p-6 items-center justify-center m-4 hover:text-red-600 hover:underline"> 
              <button onClick={handleLogout}>Logout</button>

        </div>
    
      
        </div>
        :
        googleAuth !== null ?
        <div class="text-white flex border border-yellow-400 p-4 items-center rounded-md">
          <div class="p-4 items-center justify-center  hover:text-yellow-300 hover:underline">
          <NavLink to={"/user"}>
            <button>{googleAuth.given_name}</button>
          </NavLink>

          </div>
          <div class="p-6 items-center justify-center m-4 hover:text-red-600 hover:underline">
            <button onClick={handleLogout}>Logout</button>
          </div>
        
      </div>
      :
      <div></div>
      }






      </div>
    </div>
  </div>
</nav>
  )
}

export default Nav