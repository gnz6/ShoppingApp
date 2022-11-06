import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getFilm } from '../../redux/slices/films/filmActions'

const FilmDetail = () => {
  
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(()=>{
      dispatch(getFilm(id))
    },[dispatch, id])
    
    const film = useSelector(state=>state.films.film)
    console.log(film);
    return (
    <div class="text-white">
      
      <h2>Episode {film.episode_id}</h2>
      <h1>{film.title}</h1>
      <h3>{film.release_date}</h3>
      <h3>Director : {film.director}</h3>
      <div>
        {film.characters? 
        film.characters.map(c=>
          
(          <ul>
            <li>◽{c}</li>
          </ul>
)):
<div>
  <p>No registered Characters</p>
</div>
}
      
      </div>
  
    </div>
  )
}

export default FilmDetail