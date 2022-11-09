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
        
        const filteredChars = allFilms.filter(film=> film.title.toLowerCase().includes(search.toLowerCase())) 
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
        <div class="w-screen items-center justify-center focus:border-none ">
        <input onChange={handleSearch} type={"search"} class="w-full h-10 text-center font-extrabold bg-gradient-to-t from-gray-900 via-gray-700 to-gray-800 text-black    focus:border-yellow-500  focus:text-yellow-300 focus:text-xl focus:border-none focus:transition delay-75" placeholder='Search Film...'></input>
        </div>

        <div class="max-w-screen w-full flex py-10 items-center content-center justify-center  flex-wrap bg-black bg-opacity-80">
        <div class="text-center items-center pb-6 justify-center w-full">
            <h1 class="text-white text-4xl font-extrabold">FILMS</h1>
        </div>
             {!moviesInPage()[0]?
            <div>
                <h1>Loading...</h1>    
            </div>
            :
            moviesInPage().map(c=>{
                return(
                    <div class="text-white p-6 m-2 w-1/4 items-center justify-center flex flex-wrap border border-yellow-500 rounded-md bg-gray-800 bg-opacity-10">
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
            <button class="p-6 border bg-black bg-opacity-50 text-yellow-400 font-xl hover:bg-opacity-90 hover:cursor-pointer hover:text-white transition delay-75" onClick={prevPage}>Prev</button>
            <button class="p-6 border bg-black bg-opacity-50 text-yellow-400 font-xl hover:bg-opacity-90 hover:cursor-pointer hover:text-white transition delay-75" onClick={handleReload}>Reload</button>
            <button class="p-6 border bg-black bg-opacity-50 text-yellow-400 font-xl hover:bg-opacity-90 hover:cursor-pointer hover:text-white transition delay-75" onClick={nextPage}>Next</button>
        </div>


    </div>
  )
}

export default Films