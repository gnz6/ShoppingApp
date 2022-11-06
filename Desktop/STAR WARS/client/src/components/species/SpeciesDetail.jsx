import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecie } from '../../redux/slices/species/speciesActions'

const SpecieDetail = () => {
  
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(()=>{
      dispatch(getSpecie(id))
    },[dispatch, id])
    
    const specie = useSelector(state=>state.species.specie)
    return (
    <div class="text-white">
      
        <h1>{specie.name}</h1>
        <h2>{specie.language}</h2>
        <h2>Home Planet : {specie.homeworld}</h2>
        <div>
            Relevant Characters who are {specie.name}:
        {specie.people?
        specie.people.map(s=>(
            <ul>
                <li>◽{s}</li>
            </ul>
            ))    
            :
            <div>
            <h1>No Relevant characters were {specie.name}</h1>
            </div>
    }
        </div>
        
    </div>
  )
}

export default SpecieDetail