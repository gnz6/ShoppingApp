import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../../redux/slices/auth/authActions';
import { NavLink, useNavigate } from 'react-router-dom';


const Register = () => {

    const [input, setInput] = useState({name:"",email:"", password:"", confirmPassword:"", })
    const [errors, setErrors] = useState({ initial: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const { user } = useSelector((state) => state.login);

    const handleInputChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(registerUser(input.name, input.email, input.password))
        alert( `${input.email} Registered, please login`)
        navigate("/login")
    }

    const handleLogin =(e)=>{
        navigate("/login")
    }


  return (
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register to SWAPI
            </h1>
            <form onSubmit={handleSubmit}  class="space-y-4 md:space-y-6" action="#">
            <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Fullname</label>
                    <input onChange={handleInputChange} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gonzalo Pirovano"/>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={handleInputChange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input onChange={handleInputChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
 
        
                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p onClick={handleLogin} class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <NavLink to={"/login"}>Login here</NavLink>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Register