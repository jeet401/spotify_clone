import React from 'react'
import './sidebar.css'
const Cards = ( {heading,subheading,buttontext}) => {
  return (
    <div className="sidebarMiddleCards">
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <button>{buttontext}</button>
    </div>
  )
}

export default Cards