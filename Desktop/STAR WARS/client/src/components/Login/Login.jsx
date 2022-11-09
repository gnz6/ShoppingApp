import React, { useState, useEffect } from 'react'
import useLocalStorage from "../../hooks/useLocalStorage"
import { useDispatch, useSelector } from "react-redux"
import { logUser, googleLogin } from '../../redux/slices/auth/authActions'
import jwt_decode from "jwt-decode";
import { NavLink, useNavigate } from 'react-router-dom';
import sabers from "../../assets/sabers.png"
import { getUserByEmail } from '../../redux/slices/auth/authActions';

const Login = () => {

  const [input, setInput] = useState({ email: "", password: "" })
  const google = window.google
  const [googleUser, setGoogleUser] = useLocalStorage("googleUser")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = JSON.parse(localStorage.getItem("token"))
  // const [auth, setAuth ] = useLocalStorage("token")
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logUser(input.email, input.password))
    window.location.assign("http://localhost:3000/home")

  }

  const handleCallbackResponse = async (response) => {
    var userObject = jwt_decode(response.credential)
    setGoogleUser(userObject)
    const userMail = userObject.email
    const name = userObject.given_name
     dispatch(googleLogin(userMail, name))
     navigate("/home")
     alert("Logged in, welcome!")
     window.location.assign("http://localhost:3000/home")
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "132007912232-36ui443e381r7teb8rq4eic56f86mt1n.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    
      google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "medium" }
    )
  }, [googleUser])

  
useEffect(()=>{
  if(auth){
    dispatch(getUserByEmail(auth.findUser._id))

  }
},[dispatch])
const user = useSelector(state=> state.auth.user)





  return (

    <div class="min-h-screen flex flex-col">
      <div
        class=" w-screen mx-auto flex flex-col items-center justify-center px-2">
        <form  onSubmit={handleSubmit} class="border-2  p-12 space-y-10 justify-center items-center " action="#">
          <h3 class="items-center  flex text-xl font-medium text-gray-900 dark:text-white">Login to SWAPI  <img src={sabers} width="40px" alt="sabers" /> </h3>
          <div>
            <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email" onChange={handleInputChange} />
          </div>
          <div>
            <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleInputChange} />
          </div>
          {/* <div class="flex items-start">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                            </div>
								<div class="text-sm ml-3">
									<label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
								</div>
							</div>
							<a href="#" class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost
								Password?</a>
						</div> */}
         <div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
         </div>
            <h3 class='text-white justify-center w-full '>Or</h3>
            <div id='signInDiv'>
          <button  type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login with Google</button>
         </div>

         
         
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            <NavLink to={"/register"}>
              Not registered? <span className='font-bold underline'>Create Account</span>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login