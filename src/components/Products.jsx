import React from 'react'
import {ApiTopPropduct} from '../apiFolder/topProducts'
import Product from './Product'
function Products() {
  return (
    <div className='flex flex-wrap p-5'>
      {
        ApiTopPropduct.map((product, index) => {
            return <Product item={product} key={index}/>
        })
      }
    </div>
  )
}

export default Products
