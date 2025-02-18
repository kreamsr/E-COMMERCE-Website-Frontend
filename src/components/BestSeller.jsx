import React, { useState,useContext, useEffect } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title';
import GadgetItem from './GadgetItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0,8))
    },[])

  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'BEST'} text2={'GADGETS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400">Our best gadgets are really interesting it contains great features and also many things and we give you longterm waranty.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          bestSeller.map((item,key)=>
            <GadgetItem key={key} id={item._id} price={item.price} image={item.image} name={item.name}/>
          )
        }
      </div>
    </div>
  )
}

export default BestSeller
