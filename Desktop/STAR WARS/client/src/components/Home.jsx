import React, { useEffect, useState } from 'react'
import { getAllFilms } from '../redux/slices/films/filmActions'
import { getAllPlanets } from '../redux/slices/planets/planetActions'
import { getAllCharacters } from '../redux/slices/characters/characterActions'
import { getAllSpecies } from '../redux/slices/species/speciesActions'
import { useDispatch, useSelector } from 'react-redux'
import Characters from './Characters/Characters'
import Films from './Films/Films'
import Planets from './Planets/Planets'
import Species from "./species/Species"
import useLocalStorage from '../hooks/useLocalStorage'

const Home = () => {
    

    const dispatch = useDispatch()
    const allCharacters = useSelector(state => state.character.allChars)
    const allPlanets = useSelector(state => state.planet.allPlanets)
    const allFilms = useSelector(state => state.films.allFilms)
    const allSpecies = useSelector(state => state.species.allSpecies)
    const [tab, setTab] = useLocalStorage("tab", "")

    useEffect(() => {
        dispatch(getAllCharacters())
        dispatch(getAllFilms())
        dispatch(getAllPlanets())
        dispatch(getAllSpecies())
    }, [dispatch])


    return (
        <div >
            <nav class="bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 text-gray-300 h-12 items-center">
                <ul class="flex items-start pt-1 justify-evenly h-10   visited:text-yellow-300" >
                    <li class="border h-10 font-lg w-1/6 items-center justify-center text-center bg-black bg-opacity-50 hover:text-yellow-400 font-bold rounded-lg">
                        <button onClick={(e) => setTab(e.target.value)} name="tab" value={"characters"}>
                            Characters
                        </button>
                    </li>
                    <li class="border h-10 font-lg w-1/6 items-center justify-center text-center bg-black bg-opacity-50 hover:text-yellow-400 font-bold rounded-lg">
                        <button onClick={(e) => setTab(e.target.value)} name="tab" value={"films"}>
                            Films
                        </button>
                    </li>
                    <li class="border h-10 font-lg w-1/6 items-center justify-center text-center bg-black bg-opacity-50 hover:text-yellow-400 font-bold rounded-lg">
                        <button onClick={(e) => setTab(e.target.value)} name="tab" value={"planets"}>
                            Planets
                        </button>
                    </li>
                    <li class="border h-10 font-lg w-1/6 items-center justify-center text-center bg-black bg-opacity-50 hover:text-yellow-400 font-bold rounded-lg">
                        <button onClick={(e) => setTab(e.target.value)} name="tab" value={"species"}>
                            Species
                        </button>
                    </li>
                </ul>
            </nav>
            {
                tab === "characters" ?
                    <div>
                        <Characters />
                    </div>
                    :
                    tab === "films" ?
                        <div>
                            <Films />
                        </div>
                        :
                        tab === "planets" ?
                            <div>
                                <Planets />
                            </div>
                            :
                            tab === "species" ?
                                <div>
                                    <Species />
                                </div>
                                : <div>
                                    <h1>Select a Category to display results</h1>
                                </div>
            }


        </div>
    )
}

export default Home