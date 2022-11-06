import React from 'react'

const FilmCard = ({_id, title, release_date, episode_id}) => {

  return (

    <div class="text-white" key={_id}>
        <h3>Episode {episode_id}</h3>
        <h1>{title}</h1>
        <h3>{release_date}</h3>
    </div>    

  )
}

export default FilmCard