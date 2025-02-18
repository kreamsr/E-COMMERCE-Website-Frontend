import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from '../components/Title'

const Orders = () => {

  const {products, currency} = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'YOUR'} text2={'ORDERS'}/>
      </div>
      <div>
        {
          products.slice(5,9).map((item,key) =>(
            <div key={key} className={`py-4 border-t border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${key===products.slice(5,9).length-1 ? 'border-b' : ''}`}>
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image} alt="" className="w-16 sm:w-20" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: XL</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>25 JULY , 2024</span></p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-3">
                  <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                  <p className="text-sm md:text-base">Ready to Ship</p>
                </div>
                <button className="border border-gray-300 hover:bg-gray-100 px-4 py-4 text-sm font-medium rounded-sm">Track Order</button>
              </div>
            </div>
          ) )
        }
      </div>
    </div>
  )
}

export default Orders
