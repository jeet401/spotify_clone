import React from 'react'
import './trendingCard.css'
import { TrendingCardData } from '../../config/config'
import '../artistCard/artistCard.css' 

const TrendingCard = () => {
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
          <div className="cardContainer">
            <img src={ele.imgSrc} alt="Trending Image" />
            <div className="cardTextContainer">
            <h2>{ele.heading}</h2>
            <p>{ele.subHeading}</p>
          </div> </div>
          </>
        )
      })
    }
    </div>
    </>
    
  )
}

export default TrendingCard