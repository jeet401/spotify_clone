import React from 'react'
import './popularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtists = ({setCurrentPage}) => {
  return (
    <div className="popularArtistsMainContainer trendingsectionMainContainer">
      <span>Popular Artists</span>
        <ArtistCard setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default PopularArtists