import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title.jsx';
import GadgetItem from './GadgetItem.jsx';

const RelatedGadgets = ({category, colour}) => {

    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([]);


    useEffect(() => {
        if (products.length>0) {
           let  pc = products.slice()
            pc = pc.filter((item) => category === item.category)
            pc = pc.filter((item) => colour === item.subCategory)
            setRelated(pc.slice(0,5))
        }
    },[products])

  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'RELATED'} text2={'GADGETS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400">following are the most realted gadets for what your looking right now. you can also check the following related products </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          related.map((item,key)=>
            <GadgetItem key={key} id={item._id} price={item.price} image={item.image} name={item.name}/>
          )
        }
      </div>
    </div>
  )
}

export default RelatedGadgets
