import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const {currency, delivery_fee, totalPrice} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title text1={'CART'}  text2={'TOTAL'}/>
      </div>

      <div className="flex flex-col gap2 mt-2 text-sm">
         <div className="flex justify-between text-gray-400">
            <p>SubTotal</p>
            <p>{currency}{totalPrice()}.00</p>
         </div>
         <hr />
         <div className="flex justify-between text-gray-400">
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee}.00</p>
         </div> 
         <hr />
         <div className="flex justify-between">
            <b>Total</b>
            <b>{currency}{totalPrice() === 0 ? 0: totalPrice() + delivery_fee}.00</b>
         </div>
        
      </div>
    </div>
  )
}

export default CartTotal
