import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getFilm } from '../../redux/slices/films/filmActions'
import Loader from '../Loader'

const FilmDetail = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getFilm(id))
  }, [dispatch, id])

  const film = useSelector(state => state.films.film)

  return (
    <div class="text-white w-full items-center justify-center h-screen bg-black bg-opacity-60 p-10">
      {film._id === id ?
        <div>

          <h2 class="text-3xl text-yellow-400 text-center font-bold" >Episode {film.episode_id}</h2>
          <h1 class="text-4xl text-yellow-400 text-center font-extrabold ">{film.title}</h1>
          <h3 class="text-xl text-bold text-center pt-10"> Release Date: <span class="text-2xl text-yellow-400 ">{film.release_date} </span></h3>
          <h3  class="text-xl text-bold text-center ">Director: <span class="text-2xl text-yellow-400 ">  {film.director} </span></h3>
          <div >
            <h2 class="text-xl text-bold text-center  pt-6 pb-4">Characters:</h2>
            {film.characters ?
              film.characters.map(c =>

              (<ul class ="text-yellow-400 text-2xl font-bold inline-block" >
                <li>◽{c}</li>
              </ul>
              )) :
              <div>
                <p>No registered Characters</p>
              </div>
            }

          </div>
        </div>
        :
        <div>
          <Loader />
        </div>}


    </div>
  )
}

export default FilmDetail