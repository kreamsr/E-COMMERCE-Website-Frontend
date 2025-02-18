import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search, setSearch,showSearchBar, setShowSearchBar} = useContext(ShopContext)
    const location = useLocation();
    const [visible, setVisible] = useState(false)


    useEffect(()  => {
        if (location.pathname.includes('gadgets')) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

  return showSearchBar && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input type="text" onChange={(e) =>setSearch(e.target.value) } placeholder='Search' className="flex-1 outline-none bg-inherit text-sm" />
            <img src={assets.search_icon} alt="" className="w-4" />
        </div>
        <img src={assets.cross_icon} alt="" onClick={() => setShowSearchBar(false)} className="inline w-3 cursor-pointer" />
    </div>
  ): null
}

export default SearchBar
