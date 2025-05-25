import React from 'react'
import './popularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtists = () => {
  return (
    <div className="popularArtistsMainContainer trendingsectionMainContainer">
      <span>PopularArtists</span>
        <ArtistCard />
    </div>
  )
}

export default PopularArtists