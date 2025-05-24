import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainSection from './components/mainSection/MainSection'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <>
     <div className= "mainContainer">
      <Navbar/>
     <div className="mainContentContainer">
            <Sidebar/>
      <MainSection/>

      </div>
      </div>
    </>
  )
}

export default App
