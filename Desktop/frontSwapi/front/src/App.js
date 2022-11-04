import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './components/Landing'
import axios from "axios";
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home";
import Planets from "./components/Planets";
import Films from "./components/Films";
import Characters from "./components/Characters";
import CharacterDetail from "./components/CharacterDetail";


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
      <Route path='landing' element={<Landing/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/planets" element={<Planets/>}/>
      <Route path="/films" element={<Films/>}/>
      <Route path="/characters" element={<Characters/>}/>
      <Route path="/character/:id" element={<CharacterDetail/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
