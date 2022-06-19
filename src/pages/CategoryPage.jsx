import React from 'react'
import Anounce from '../components/Anounce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'

function CategoryPage() {
  return (
    <div>
      <Anounce />
      <Navbar />
      <div className='flex flex-col p-5'>
        <h2 className='text-[30px]'>Men's Cloth</h2>
        <div className='flex items-center justify-between mt-3'>
            <div className='flex'>
                <p>Filter by </p>
                <select className='ml-3 border-2 border-silver'>
                    <option selected disabled>Size</option>
                    <option>Small </option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <select className='ml-3 border-2 border-silver'>
                    <option selected disabled>Color</option>
                    <option>Yellow</option>
                    <option>Blue</option>
                    <option>Red</option>
                </select>
            </div>
            <div className='flex'>
                <p>Sort By</p>
                <select className='ml-3 border-2 border-silver'>
                    <option>Newset (First)</option>
                    <option>Oldest (First)</option>
                    <option>Price (ASC)</option>
                    <option>Price (DSC)</option>
                </select>
            </div>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default CategoryPage
