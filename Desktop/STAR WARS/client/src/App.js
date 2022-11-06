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


function App() {

  const auth = JSON.parse(localStorage.getItem("token"))
  if (auth) {
    axios.defaults.headers.common['x-access-token'] = auth.token;
} else {
    axios.defaults.headers.common['x-access-token'] = null;
}

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
    
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
