import React, { useState} from 'react'
import './mainSection.css'
import Trending from '../trending/Trending'
import PopularArtists from '../popularArtists/PopularArtists'
import SpecificMusicFile from '../specificMusicPage/SpecificMusicFile'


const MainSection = () => {
  const [currentPage, setCurrentPage] = useState("home")
  return (
    <main className = "mainSection">
      {
        currentPage === "home" ?
        <>
          <Trending setCurrentPage = {setCurrentPage}/>
          <PopularArtists setCurrentPage = {setCurrentPage}/>
        </> : currentPage === "musicSpecificPage" ? <><SpecificMusicFile/></> 
            : currentPage === "artistSpecificPage" ? <>artist</> 
            : null
      }
    </main>
  )
}

export default MainSection