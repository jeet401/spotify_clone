import React from 'react'
import './artistCard.css'
import { artistList } from '../../config/config'
const ArtistCard = () => {
  const arr = [
    {img:"",name:""},
    {img:"",name:""},
    {img:"",name:""},
    {img:"",name:""},
    {img:"",name:""},
    {img:"",name:""}
  ]
  return (
    <>
    <div className="artistCardMainContainer">
    { artistList.map((ele) => {
      return (
        <div className="artistCard">
          <img src={ele.img} alt="Artist Image" />
          <div className="artistCardTextContainer">
            <h1>{ele.name}</h1>
            <p>Artist</p>
        </div></div>
      )
    })
    }
    </div>
    </>
  )
}

export default ArtistCard