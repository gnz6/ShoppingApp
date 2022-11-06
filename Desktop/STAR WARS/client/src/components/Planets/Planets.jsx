import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllPlanets } from '../../redux/slices/planets/planetActions'
import PlanetCard from './PlanetCard'

function Planets() {

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")    
    const allPlanets = useSelector(state=> state.planet.allPlanets)

    useEffect(()=>{
        dispatch(getAllPlanets())
        
    },[dispatch])

    console.log(allPlanets)
    const planetsInPage =()=>{
        if(search.length === 0) return allPlanets.slice(currentPage ,currentPage + 8)
        
        const filteredChars = allPlanets.filter(film=> film.name.toLowerCase().includes(search.toLowerCase())) 
        return filteredChars.slice(currentPage, currentPage+8)
    }
    

    const nextPage = () =>{
        if (allPlanets.filter(film=> film.name.includes(search)).length > currentPage + 8){
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
        dispatch(getAllPlanets())
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
             {!planetsInPage()[0]?
            <div>
                <h1>Loading...</h1>    
            </div>
            :
            planetsInPage().map(c=>{
                return(
                    <div class="text-white p-8 w-fit flex border ">
                        <NavLink to={`/planet/${c._id}`}>
                            <PlanetCard
                            key={c._id}
                            id={c._id}
                            name={c.name}
                            terrain={c.terrain}
                            diameter={c.diameter}
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

export default Planets