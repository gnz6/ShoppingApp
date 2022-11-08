import React from 'react'
import loader from "../assets/loader.gif"
const Loader = () => {
  return (
    <div class="bg-black bg-opacity-90 w-100% h-full items-center p-8 ml-12 justify-center">
        <img src={loader} alt="loadergif" class="h-[500px] ml-[200px] items-center justify-center"/>
        <p class="text-white text-center">Loading...</p>
    </div>
  )
}

export default Loader