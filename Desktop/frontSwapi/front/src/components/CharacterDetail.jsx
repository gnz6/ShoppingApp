import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../redux/slices/characters/characterActions'
import { getCharacterFilms, getFilm } from '../redux/slices/films/filmActions'
import { getPlanet } from '../redux/slices/planets/planetActions'
import { getSpecie } from '../redux/slices/species/speciesActions'
const CharacterDetail = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    let character = useSelector((state)=> state.character.character)
    let charHome = useSelector((state)=>state.planet.planet)
    let charSpecie = useSelector((state)=>state.species.specie)
    let charFilms = useSelector((state)=>state.films.film)
    const planetId = character.homeworld
    const specieId = character.specie
    const filmsId = character.films
        //   console.log(filmId);
      console.log(charFilms);

    useEffect(()=>{
        if(filmsId){
            dispatch(getCharacterFilms(id, filmsId))
            dispatch(getPlanet(planetId))
            dispatch(getSpecie(specieId))
        }else{
            dispatch(getCharacter(id))
            dispatch(getPlanet(planetId))
            dispatch(getSpecie(specieId))
        }
    // },[dispatch, id, planetId,specieId, filmId ])
},[dispatch, planetId, specieId])


  return (
    <div>
        {!character?
    <div>
        <h1>Loading..</h1>
    </div>:
    <div class="text-white">
        <h1>{character.name}</h1>
        <h3>Birth Year: {character.birth_year}</h3>
        <h3>Homeworld: {charHome.name}</h3>
        {/* {filmId?
        <h3> Films: {charFilms?charFilms.title: "No films registered"}</h3>
        :
        <h3>Films : {charFilms? charFilms.map(film=>film.title + ", ") : ""}</h3>
        } */}
        <h3> Specie: {charSpecie.name? charSpecie.name: "Human"}</h3>

    </div>    
    }
    </div>
  )
}

export default CharacterDetail