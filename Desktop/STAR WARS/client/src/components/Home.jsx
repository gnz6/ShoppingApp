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

const Home = () => {

    const dispatch = useDispatch()
    const allCharacters = useSelector(state => state.character.allChars)
    const allPlanets = useSelector(state => state.planet.allPlanets)
    const allFilms = useSelector(state => state.films.allFilms)
    const allSpecies = useSelector(state => state.species.allSpecies)
    const [tab, setTab] = useState("characters")

    useEffect(() => {
        dispatch(getAllCharacters())
        dispatch(getAllFilms())
        dispatch(getAllPlanets())
        dispatch(getAllSpecies())
    }, [dispatch])


    return (
        <div class="text-white">
            <nav >
                <ul class="flex items-center justify-center p-8 " >
                    <li>
                        <button onClick={(e) => setTab(e.target.value)} name="tab" value={"characters"}>
                            Characters
                        </button>
                    </li>
                    <li >
                        <button onClick={(e) => setTab(e.target.value)} name="tab" value={"films"}>
                            Films
                        </button>
                    </li>
                    <li >
                        <button onClick={(e) => setTab(e.target.value)} name="tab" value={"planets"}>
                            Planets
                        </button>
                    </li>
                    <li >
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
                                    <h1>404</h1>
                                </div>
            }


        </div>
    )
}

export default Home