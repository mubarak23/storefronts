import React from 'react'
import Anounce from '../components/Anounce'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

function Cart() {
  return (
    <div>
      <Anounce />
      <Navbar />
      <div className='p-5'>
        <div className='flex justify-center text-5xl'>
        Cart
        </div>
        <div className='flex items-center justify-between mt-4'>
            <button className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>Continue Shopping</button>
            <div className='flex underline text-lg hover:cursor-pointer '>
                <p>Items in your cart: 3</p>
                <p className='ml-5'>whitlist Items: 0</p>
            </div>
            <button className='btn'>Checkout</button>
        </div>
        {/* central div */}
        <div className='flex mt-5'>
            <div className='flex flex-col flex-1'>
                {/* List of Products */}
                <div className='flex w-[100%] h-auto items-center bg-blue-200'>
                <div className='product flex self-start pl-5'>
                    <img
                    className='w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-[1:1]
                    ease-in duration-300'
                     src='https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?v=1642616536'
             alt='Product Description'/>
             <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                <p>
                    <b className='mr-1'>ID</b>: 348957
                </p>
                <p>
                    <b className='mr-1'>Product:</b> Hoody Smoth
                </p>
                <p className='flex items-center justify-start '>
                    <b className='mr-1'>Color:</b>
                    <div className='bg-orange-500 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer
             ml-5 hover:border-[#8a4af3]'></div>
                </p>
                <p>
                    <b className='mr-1'>Size:</b> Meduim
                </p>
             </div>
            </div>
                <div className='flex flex-col justify-center items-center ml-2 flex-auto'>
                    <Counter />
                    <p className='flex items-center justify-center text-2xl mt-3'>
                        <b>N8750</b>
                    </p>
                </div>
            </div>
            <hr className='mt-3 mb-3'/>
            </div>
            <div className='bg-red-300'>
                Summary
            </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Cart
