import React from 'react'
import './trendingCard.css'
import { TrendingCardData } from '../../config/config'

const TrendingCard = ({setCurrentPage}) => {
  const arr=[
    {imgSrc: "",
    heading:"",
    subHeading:""},
    {imgSrc: "",
    heading:"",
    subHeading:""},
    {imgSrc: "",
    heading:"",
    subHeading:""},
    {imgSrc: "",
    heading:"",
    subHeading:""},
    {imgSrc: "",
    heading:"",
    subHeading:""},
    {imgSrc: "",
    heading:"",
    subHeading:""}
  ]
  return (
    <> 
    <div className = "trendingCardMainContainer">
    {
      TrendingCardData.map((ele)=> {
        return (
          <>
          <div onClick={()=> {
            setCurrentPage("musicSpecificPage")
          }} className="cardContainer">
            <img src={ele.imgSrc} alt="Trending Image" />
            <div className="cardTextContainer">
            <h2>{ele.heading}</h2>
            <p>{ele.subHeading}</p>
          </div>
            <span className="playButton">
              <svg data-encore-id="icon" role="img" aria-hidden="true" className="e-9911-icon e-9911-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
            </span>
             </div>
          </>
        )
      })
    }
    </div>
    </>
    
  )
}

export default TrendingCard