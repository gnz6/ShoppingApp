import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllSpecies } from '../../redux/slices/species/speciesActions'
import SpeciesCard from './SpeciesCard'

function Films() {

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")    
    const allSpecies = useSelector(state=> state.species.allSpecies)

    useEffect(()=>{
        dispatch(getAllSpecies())
        
    },[dispatch])

    const moviesInPage =()=>{
        if(search.length === 0) return allSpecies.slice(currentPage ,currentPage + 8)
        
        const filteredChars = allSpecies.filter(specie=> specie.name.toLowerCase().includes(search.toLowerCase())) 
        return filteredChars.slice(currentPage, currentPage+8)
    }
    

    const nextPage = () =>{
        if (allSpecies.filter(specie=> specie.name.includes(search)).length > currentPage + 8){
            setCurrentPage(currentPage + 8)
        }
    }

    const prevPage = () =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 8)
        }
    }

    const handleReload =(e)=>{
        e.preventDefault();
        dispatch(getAllSpecies())
        setCurrentPage(0)
    }

    const handleSearch =(e)=>{
        setSearch(e.target.value)
        setCurrentPage(0)
    }

  return (
    <div>
        <div class="w-screen">
        <input onChange={handleSearch} type={"search"} class="w-full h-8" placeholder='Search characters'></input>
        </div>

        <div class="w-full flex  flex-wrap">
             {!moviesInPage()[0]?
            <div>
                <h1>Loading...</h1>    
            </div>
            :
            moviesInPage().map(c=>{
                return(
                    <div class="text-white p-8 w-fit flex border ">
                        <NavLink to={`/specie/${c._id}`}>
                            <SpeciesCard
                            key={c._id}
                            id={c._id}
                            name={c.name}
                            language={c.language}
                            />
                        </NavLink>
                    </div>
                )
            }) 
        } 
        </div>        
        <div class="text-white flex justify-center ">
            <button class="p-6 border" onClick={prevPage}>Prev</button>
            <button class="p-6 border" onClick={handleReload}>Reload</button>
            <button class="p-6 border" onClick={nextPage}>Next</button>
        </div>


    </div>
  )
}

export default Films