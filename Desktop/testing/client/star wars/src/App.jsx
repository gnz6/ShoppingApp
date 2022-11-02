import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './components/Landing'
import axios from "axios";
import Nav from './components/Nav';


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
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='landing' element={<Landing/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
