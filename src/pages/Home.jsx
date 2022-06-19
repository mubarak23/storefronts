import React from 'react'
import Anounce from '../components/Anounce'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Anounce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home
