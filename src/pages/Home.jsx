import React from 'react'
import Anounce from '../components/Anounce'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Anounce />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}

export default Home
