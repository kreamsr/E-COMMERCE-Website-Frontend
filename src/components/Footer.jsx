import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
      
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 gap-12  text-gray-600'>
          <div>
            <img src={assets.logo} alt=""  className=' inline mb-5 w-18'/>
            <span className='text-bold font-medium'>IMAK</span>
            <p className="w-full md:w-2/3 text-gray-500">It is a text once again to inform you our great gadgets.Good luck! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, ipsam.Lorem15 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta harum adipisci omnis eos maiores recusandae! </p>
          </div>

          <div>
            <p className="text-xl py-6 text-bold font-lg ">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-400 ">
              <li><Link to="/" className='hover:underline'>HOME</Link></li>
              <li><Link to="/gadgets" className='hover:underline'>GADGETS</Link></li>
              <li><Link className='hover:underline' to="/about ">ABOUT</Link></li>
              <li><Link to="/contact" className='hover:underline'>CONTACT</Link></li>
            </ul>     
          </div>
          <div>
            <p className="text-xl py-6 text-bold font-lg ">REACH OUT</p>
            <ul className="flex flex-col gap-2 text-gray-400 ">
              <li>+521900001212</li>
              <li>support@imak.com</li>
            </ul>     
          </div>
        </div>
        <div>
          <hr />
          <p className="text-sm text-center py-5">Copyright @2025 imak.com-All Rights Are Reserved</p>
        </div>
    </div>
    
  )
}

export default Footer
