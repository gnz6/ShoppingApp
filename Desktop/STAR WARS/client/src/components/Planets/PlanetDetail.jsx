import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlanet } from '../../redux/slices/planets/planetActions'

const PlanetDetail = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPlanet(id))
  }, [dispatch, id])

  const planet = useSelector(state => state.planet.planet)
  console.log(planet);
  return (
    <div class="text-white">

      <h1>{planet.name}</h1>
      <h3>Diameter : {planet.diameter} km</h3>
      <h3>Climate : {planet.climate}</h3>
      <h3>Terrain : {planet.terrain}</h3>

      <div>
        Residents:
        {planet.residents ?
          planet.residents.map(c =>

          (<ul>
            <li>◽{c}</li>
          </ul>
          )) :
          <div>
            <p>No registered Residents</p>
          </div>
        }
      </div>

      <div>
        Films:
        {Array.isArray(planet.films) ?
          planet.films?.map(c =>

          (<ul>
            <li>◽{c}</li>
          </ul>
          )) :
          <div>
            <p>No Films for {planet.name}</p>
          </div>
        }
      </div>

    </div>
  )
}

export default PlanetDetail