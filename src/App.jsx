import React from 'react'

import Header from './components/Header'
import HeaderNav from './components/HeaderNav'
import Carousel from './components/Carousel'
import MainContainer from './components/MainContainer'

import '/src/App.css'

function App() {

  return (
    <>
    <div className="app">

    <Header />
    <HeaderNav />
    <Carousel />
    <MainContainer />
    
    </div>
 


    </>
  )
}

export default App
