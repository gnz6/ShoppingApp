import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Nav from './components/Nav';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Home from "./components/Home";
import Planets from "./components/Planets/Planets";
import Films from "./components/Films/Films";
import Characters from "./components/Characters/Characters";
import CharacterDetail from "./components/Characters/CharacterDetail";
import PlanetDetail from "./components/Planets/PlanetDetail";
import FilmDetail from "./components/Films/FilmDetail";
import SpecieDetail from "./components/species/SpeciesDetail";
import FavCharacters from "./components/FavCharacters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserByEmail } from "./redux/slices/auth/authActions";


function App() {
  const dispatch = useDispatch()
  const auth = JSON.parse(localStorage.getItem("token"))
  if (auth) {
    axios.defaults.headers.common['x-access-token'] = auth.token;

} else {
    axios.defaults.headers.common['x-access-token'] = null;
}

useEffect(()=>{
      dispatch(getUserByEmail(auth.findUser._id))
},[dispatch, auth.findUser._id])
const user = useSelector(state=> state.auth.user)

  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/planets" element={<Planets/>}/>
      <Route path="/films" element={<Films/>}/>
      <Route path="/characters" element={<Characters/>}/>
      <Route path="/character/:id" element={<CharacterDetail/>}/>
      <Route path="/planet/:id" element={<PlanetDetail/>}/>
      <Route path="/film/:id" element={<FilmDetail/>}/>
      <Route path="/specie/:id" element={<SpecieDetail/>}/>
      <Route path="/user" element={<FavCharacters/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
