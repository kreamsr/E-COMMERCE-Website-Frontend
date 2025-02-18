import React, { useContext, useEffect, useState } from 'react'
import  { ShopContext } from '../contexts/ShopContext.jsx'
import Title from './Title.jsx';
import GadgetItem from './GadgetItem.jsx';

const LatestGadgets = () => {


 const { products } = useContext(ShopContext);
 const [latestGadgets, setLatestGadgets] = useState([]);

  useEffect( () =>{
    setLatestGadgets(products.slice(18,29));
  },[]) ;
  return (


    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'GADGETS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400">Our latest gadgets are really interesting it contains great features and also many things Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, repellendus. </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestGadgets.map((item,key)=>
            <GadgetItem key={key} id={item._id} price={item.price} image={item.image} name={item.name}/>
          )
        }
      </div>
    </div>
  )
}

export default LatestGadgets
