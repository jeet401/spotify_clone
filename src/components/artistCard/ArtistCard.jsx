import React from 'react'
import './artistCard.css'
import { artistList } from '../../config/config'
const ArtistCard = ({setCurrentPage}) => {
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
    <div onClick={()=> {
      setCurrentPage("artistSpecificPage")
    }} className="artistCardMainContainer">
    { artistList.map((ele) => {
      return (
        <div className="artistCard">
          <img src={ele.img} alt="Artist Image" />
          <div className="artistCardTextContainer">
            <h1>{ele.name}</h1>
            <p>Artist</p>
        </div>
        <span id='playButton'> <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-9911-icon e-9911-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></span>
       
        </div>
      )
    })
    }
    </div>
    </>
  )
}

export default ArtistCard