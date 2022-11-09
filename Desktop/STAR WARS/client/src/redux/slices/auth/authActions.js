import axios from "axios";
import { login, logout, register, googleLog, getUser } from "./authSlice";
const baseUrl = "http://localhost:3001/api/"


export const logUser=(email,password)=>(dispatch)=>{
    axios.post("http://localhost:3001/api/auth/login", {email, password})
    .then(res=>dispatch(login(res.data)))
    .then(data => window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .then(alert("logged"))
    .catch(e=>{
        dispatch(login(e.response.data))
        window.localStorage.setItem("token", null)
    });
}

export const logOutUser=()=>(dispatch)=>{
    const token = window.localStorage.getItem("token")
    if(token){
        dispatch(logout(window.localStorage.removeItem("token", "googleUser")
        ))
    }
}

export const registerUser=(name, email, password)=>(dispatch)=>{
    axios.post("http://localhost:3001/api/auth/signup", {name, email, password})
    .then(res=>dispatch(register(res.data)))
    // .then(data=> console.log(data))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .catch(e => {
        dispatch(register(e.response.data))
        window.localStorage.setItem("token", null)})
}

export const googleLogin=(email, name)=>(dispatch)=>{
     axios.post(baseUrl+"auth/google", {email:email, name: name,})
     .then(res => dispatch(googleLog(res.data)))
    // .then(data=>console.log(data.payload))
    .then(data=> window.localStorage.setItem("token", JSON.stringify(data.payload)))
    .catch(e=>console.log(e.response.data)
);
}

export const getUserByEmail =(id)=>(dispatch)=>{
    axios.get( `http://localhost:3001/api/auth/user/${id}`)
    .then(res=> dispatch(getUser(res.data)))
    .catch(e=>console.log(e))
}
