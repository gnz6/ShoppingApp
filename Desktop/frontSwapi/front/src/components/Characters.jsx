import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllCharacters } from '../redux/slices/characters/characterActions'
import CharacterDetail from './CharacterDetail'

function Characters() {

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")    
    
    useEffect(()=>{
        dispatch(getAllCharacters())
        
    },[dispatch])
    
    const allCharacters = useSelector(state=> state.character.allChars)
    console.log(allCharacters);

    const charsInPage =()=>{
        if(search.length === 0) return allCharacters.slice(currentPage ,currentPage + 8)
        
        const filteredChars = allCharacters.filter(character=> character.name.toLowerCase().includes(search.toLowerCase())) 
        return filteredChars.slice(currentPage, currentPage+8)
    }
    

    const nextPage = () =>{
        if (allCharacters.filter(character=> character.name.includes(search)).length > currentPage + 8){
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
        dispatch(getAllCharacters())
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

        <div>
            {charsInPage()[0]?
            <div>
                <h1>Loading...</h1>    
            </div>
            :
            charsInPage.map(c=>{
                return(
                    <div>
                        <NavLink to={`/character/${c.id}`}>
                            <CharacterDetail
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            birth_year={c.birth_year}
                            homeworld={c.homeworld}
                            />
                        </NavLink>
                    </div>
                )
            }) 
        }
        <div>
            <button onClick={prevPage}>Prev</button>
            <button onClick={handleReload}>Reload</button>
            <button onClick={nextPage}>Next</button>
        </div>
        </div>        


    </div>
  )
}

export default Characters