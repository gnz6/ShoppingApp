import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from "../assets/Star_Wars_Logo.svg.png"
import useLocalStorage from '../hooks/useLocalStorage'
import { logOutUser } from '../redux/slices/auth/authActions'

const Nav = () => {

  const auth = JSON.parse(localStorage.getItem("token"))
  const googleAuth = JSON.parse(localStorage.getItem("googleUser"))
  const [googleUser, setGoogleUser] = useLocalStorage("googleUser")

  const dispatch = useDispatch()
   console.log(googleAuth);
   console.log(auth);
const handleLogout=(e)=>{
  e.preventDefault()
  setGoogleUser(null)
  dispatch(logOutUser())
  window.location.reload()
}


  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-[#000]">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="flex items-center">
       <NavLink to={"/"}>
        <img src={logo} class="mr-3 h-6 sm:h-9"  alt="Star Wars" />
       </NavLink>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <div class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="/home" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-500 md:p-0 dark:text-white" aria-current="page">
            <button class="text-white hover:text-yellow-400">
              Home
              </button>
            </NavLink>
        </li>
      
      
      {!auth && !googleAuth?
        <div>
                  <li>
          <NavLink to="/login" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <button class="text-white hover:text-yellow-400">
              Login
              </button>
            </NavLink>
        
        </li>
        <li>
          <NavLink to="/register" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <button class="text-white hover:text-yellow-400">Register</button>
            </NavLink>
        </li>

        </div>
        :
        auth !== null ?
        <div class="text-white">
          <li>
            <NavLink to={"/user"}>
              <button>{auth.findUser.name}</button>
            </NavLink>
          </li>

          <li>
              <button onClick={handleLogout}>Logout</button>
          </li>
        </div>
        :
        googleAuth !== null ?
        <div class="text-white">
        <li>
          <NavLink to={"/user"}>
            <button>{googleAuth.given_name}</button>
          </NavLink>
        </li>

        <li>
            <button onClick={handleLogout}>Logout</button>
        </li>
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