import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ShopContext } from '../contexts/ShopContext.jsx'

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const {setShowSearchBar,cartCount} = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <div>
            <Link to='/'>
              <img src={assets.logo}  className='w-12 inline' alt="" />
              
              <p className='text-gray-500 inline px-2' >IMAK</p>
            </Link>
        </div>
      
       <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to='' className="flex flex-col items-center gap-1 hover:bg-gray-100 rounded ">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/gadgets' className="flex flex-col items-center gap-1 hover:bg-gray-100 rounded">
            <p>GADGETS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1 hover:bg-gray-100 rounded">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1 hover:bg-gray-100 rounded">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
       </ul>
       <div className="flex items-center gap-6">
          <img src={assets.search_icon} onClick={() => setShowSearchBar(true)} className='w-5 cursor-pointer  ' alt="" />

          <div className="group relative">
            <Link to='/login'><img src={assets.profile_icon} alt="" className="w-5  cursor-pointer" /></Link>
            <div className="group-hover:block hidden absolute dropdown-menu  shadow-lg right-0 pt-4">
              <div className="flex flex-col gap-2 w-40 py-3  bg-slate-100 text-gray-500 shadow-lg  rounded">
                  <p className="cursor-pointer hover:bg-gray-200 hover:text-black   px-2 py-1 rounded">My profile</p>
                  <p className="cursor-pointer hover:bg-gray-200 hover:text-black px-2 py-1 rounded">Orders</p>
                  <p className="cursor-pointer hover:bg-gray-200 hover:text-black px-2 py-1 rounded">Logout</p>
              </div>
            </div>
            
          
          </div>
          <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
              <p className='absolute right-[-5px] w-4 bottom-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]
            '>{cartCount()}</p>
            </Link>
            <img src={assets.menu_icon} onClick={() => setVisible(true)} alt="" className="w-5 cursor-pointer sm:hidden" />
       </div>
       <div className= {`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${visible ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-600">
            <div className="flex itens-center gap-4 p-3 cursor-pointer border">
              <img onClick={() => setVisible(false)} src={assets.dropdown_icon} alt="" className="h-4 mt-[4px] rotate-180" />
              <p className='text-gray-600'>Back</p>
            </div>
            <NavLink to='/' onClick={() => setVisible(false)} className='py-2 pl-6 hover:bg-gray-200'>HOME</NavLink>
            <NavLink to='/gadgets' onClick={() => setVisible(false)} className='py-2 pl-6  hover:bg-gray-200 border'>GADGETS</NavLink>
            <NavLink to='/about' onClick={() => setVisible(false)} className='py-2 pl-6 hover:bg-gray-200'>ABOUT</NavLink>
            <NavLink to='/contact' onClick={() => setVisible(false)} className='py-2 pl-6 border hover:bg-gray-200'>CONTACT</NavLink>
          </div>
       </div>
    </div>
  )
}

export default Navbar
