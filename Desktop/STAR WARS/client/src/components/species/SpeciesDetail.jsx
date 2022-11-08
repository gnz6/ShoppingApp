import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecie } from '../../redux/slices/species/speciesActions'
import Loader from '../Loader'

const SpecieDetail = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSpecie(id))
    }, [dispatch, id])

    const specie = useSelector(state => state.species.specie)
    return (
        <div class="text-white w-full items-center justify-center h-screen bg-black bg-opacity-60 p-10">

            {specie._id === id ?
                <div>
                    <h1 class="text-4xl text-yellow-400 text-center ">{specie.name}</h1>
                    <h2 class="text-xl text-bold text-center pt-10">Language: <span class="text-2xl text-yellow-400 ">{specie.language}</span></h2>
                    <h2 class="text-xl text-bold text-center "> Home Planet : <span class="text-2xl text-yellow-400 ">  {specie.homeworld}</span></h2>
                    <div class="text-xl text-bold text-center ">
                       <h2 class="text-xl text-bold text-center  pt-6 pb-4"> Relevant Characters who are {specie.name}: </h2>
                        {specie.people ?
                            specie.people.map(s => (
                                <ul class ="text-yellow-400 text-2xl font-bold inline-block">
                                    <li>◽{s}</li>
                                </ul>
                            ))
                            :
                            <div class="text-xl text-bold text-center ">
                                <h1>No Relevant characters were {specie.name}</h1>
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

export default SpecieDetail