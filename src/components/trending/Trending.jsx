import React from 'react'
import './trending.css'
import TrendingCard from '../trendingCard/TrendingCard'

const Trending = ({setCurrentPage}) => {
  return (
    <div className="trendingsectionMainContainer">
      <span>Trending Songs</span>

    <TrendingCard setCurrentPage = {setCurrentPage}/>
    </div>
  )
}

export default Trending