import React from 'react'
import './trending.css'
import TrendingCard from '../trendingCard/TrendingCard'

const Trending = () => {
  return (
    <div className="trendingsectionMainContainer">
      <span>Trending Songs</span>

    <TrendingCard />
    </div>
  )
}

export default Trending