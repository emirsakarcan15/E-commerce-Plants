import React from 'react'
import '../CSS/Home.css'
import Navbar from '../COMOPONENTS/Navbar'
import About from '../COMOPONENTS/About'
import GetStartedCard from '../COMOPONENTS/GetStartedCard'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex-row'>
        <About />
        <GetStartedCard />
      </div>

    </div>
  )
}

export default Home