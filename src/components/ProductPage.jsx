import React from 'react'
import NewsLetter from './NewsLetter'
import Navbar from './Navbar'
import Anounce from './Anounce'
import Footer from './Footer'

function ProductPage() {
  return (
    <div>
      <Anounce/>
      <Navbar />
      <div className='flex justify-center'>
        <div className='flex flex-1 items-center justify-center'>
            {/* Prduct Image Section */}
            <img src='https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?v=1642616536'
             alt='product' className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1:1]
              ease-in duration-300'/>
        </div>
        <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-10'>
            {/* Add to cart section */}
            <h2 className='title text-[40px]'>Creamy Hoodie Original </h2>
            <p className='pr-[4rem] text-justify mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quae ratione reiciendis voluptas, 
                quasi iusto praesentium, sint repellendus ex modi cum, deserunt quas libero est. Voluptatum 
                beatae dolores est ullam.</p>
            <p className='mt-7 text-3x'>Price: <b>N5750</b></p>  
            <div className='flex text-2xl mt-7'>
            {/* color varient */}
            Colors
            <div className='bg-red-500 w-[3rem] h-[3rem] rounded-full border-2 p-[10px] cursor-pointer ml-5'>
                
            </div>
            <div className='bg-blue-500 w-[3rem] h-[3rem] rounded-full border-2 p-[10px] cursor-pointer ml-5'></div>
            <div className='bg-orange-500 w-[3rem] h-[3rem] rounded-full border-2 p-[10px] cursor-pointer ml-5'></div>
        </div>  
        </div>
        
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProductPage
