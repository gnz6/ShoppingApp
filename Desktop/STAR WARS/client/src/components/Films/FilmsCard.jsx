import React from 'react'

const FilmCard = ({_id, title, release_date, episode_id}) => {

  return (

    <div class="text-white p-2 flex flex-col h-28" key={_id}>
        <h3 class=" text-center text-l text-gray-200">Episode {episode_id}</h3>
        <h1 class=" text-center text-2xl text-yellow-400">{title}</h1>
        <h3 class="items-center justify-center text-md">Release Date: {release_date}</h3>
    </div>    

  )
}

export default FilmCard