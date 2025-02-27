import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'> 
        <div className="">
            <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">we offer excnages with plausible money</p>
        </div>
        <div className="">
            <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">10 Days Return Policy</p>
            <p className="text-gray-400">we offer return policy for 10 days</p>
        </div>
        <div className="">
            <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Great Support For Customers</p>
            <p className="text-gray-400">we offer tireless support for our customers</p>
        </div>
    </div>
  )
}

export default OurPolicy
