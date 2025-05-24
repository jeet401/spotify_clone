import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainSection from './components/mainSection/MainSection'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
     <div className= "mainContainer">
      <Navbar/>
     <div className="mainContentContainer">
            <Sidebar/>
      <MainSection/>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
