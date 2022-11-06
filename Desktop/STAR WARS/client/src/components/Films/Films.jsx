import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllFilms } from '../../redux/slices/films/filmActions'
import FilmCard from './FilmsCard'

function Films() {

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")    
    const allFilms = useSelector(state=> state.films.allFilms)

    useEffect(()=>{
        dispatch(getAllFilms())
        
    },[dispatch])

    const moviesInPage =()=>{
        if(search.length === 0) return allFilms.slice(currentPage ,currentPage + 8)
        
        const filteredChars = allFilms.filter(film=> film.name.toLowerCase().includes(search.toLowerCase())) 
        return filteredChars.slice(currentPage, currentPage+8)
    }
    

    const nextPage = () =>{
        if (allFilms.filter(film=> film.name.includes(search)).length > currentPage + 8){
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
        dispatch(getAllFilms())
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
                        <NavLink to={`/film/${c._id}`}>
                            <FilmCard
                            key={c._id}
                            id={c._id}
                            episode_id={c.episode_id}
                            title={c.title}
                            release_date={c.release_date}
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