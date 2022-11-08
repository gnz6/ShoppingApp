import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlanet } from '../../redux/slices/planets/planetActions'
import Loader from '../Loader'

const PlanetDetail = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPlanet(id))
  }, [dispatch, id])

  const planet = useSelector(state => state.planet.planet)
  console.log(planet);
  return (
    <div class="text-white w-full items-center justify-center h-screen bg-black bg-opacity-60 p-10">

    {planet._id === id?
  <div>

<h1 class="text-4xl text-yellow-400 text-center ">{planet.name}</h1>
      <h3 class="text-xl text-bold text-center pt-10">Diameter: <span class="text-2xl text-yellow-400 ">{planet.diameter} km </span></h3>
      <h3 class="text-xl text-bold text-center">Climate: <span class="text-2xl text-yellow-400 ">{planet.climate} </span></h3>
      <h3 class="text-xl text-bold text-center">Terrain: <span class="text-2xl text-yellow-400 ">{planet.terrain } </span></h3>

      <div class="text-xl text-bold text-center pt-10">
        <h2 class="text-xl text-bold text-center  pt-6 pb-4"> Residents: </h2>
        {planet.residents ?
          planet.residents.map(c =>

          (<ul class ="text-yellow-400 text-2xl font-bold inline-block">
            <li>◽{c}</li>
          </ul>
          )) :
          <div>
            <p>No registered Residents</p>
          </div>
        }
      </div>

      <div class="text-xl text-bold text-center pt-10">
        Films:
        { planet.films ?
        
          planet.films?.map(c =>

          (<ul class ="text-yellow-400 text-2xl font-bold inline-block">
            <li ><h3>◽{c}</h3> </li>
          </ul>
          )) :
         
         <div class="text-xl text-bold text-center ">
            <p class ="text-yellow-400 text-2xl font-bold inline-block">No Films for {planet.name} 😥</p>
          </div>
        }
      </div>
  </div>
  :
  <div>
    {/* <h1 class="text-white">Loading</h1> */}
    <Loader/>
  </div>  
  }


    </div>
  )
}

export default PlanetDetail