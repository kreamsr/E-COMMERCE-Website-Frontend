import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import {Link} from 'react-router-dom'
const GadgetItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);
  return (

    <Link className='cursor-pointer text-gray-700' to={`/product/${id}`}>
        <div className="overflow-hidden">
            <img src={image[0]} alt="" className="hover:scale-110 transition ease-in-out h-[295px]" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>

    </Link>
      

  )
}

export default GadgetItem
