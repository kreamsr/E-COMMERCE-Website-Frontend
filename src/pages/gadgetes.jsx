import React, { useContext, useEffect, useState } from 'react';
import {ShopContext} from '../contexts/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title'
import GadgetItem from '../components/GadgetItem';

const Collection = () => {

  const {products, search, showSearchBar} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterGadgets, setFilterGadgets] = useState([]);
  const [category, setCategory] = useState([]);
  const [colour, setColour] = useState([]);
  const [sortType, setSortType] = useState('best');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> category.filter(item=>item!== e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }

  }


  const toggleColour = (e) => {
    if(colour.includes(e.target.value)){
      setColour(prev=> colour.filter(item=>item!== e.target.value))
    }else{
      setColour(prev=>[...prev,e.target.value])
    }
  }



  const filterAndShow = () =>{
    let productsCopy = products.slice();

    if (showSearchBar && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) )
    }
    
    if (category.length > 0) {
      productsCopy= productsCopy.filter((item) => category.includes(item.category))
      console.log(productsCopy)
    }
    if (colour.length > 0) {
      productsCopy= productsCopy.filter((item) => colour.includes(item.subCategory))
      console.log(productsCopy)
    }
    setFilterGadgets(productsCopy);
  }


  const sorter = () => {
    let filteredCopy = filterGadgets.slice();
    switch (sortType) {
      case 'low-high':
        setFilterGadgets(filteredCopy.sort((a,b) => (a.price-b.price)))
        break;
        case 'high-low':
          setFilterGadgets(filteredCopy.sort((a,b) => (b.price-a.price)))
          break;
    
      default:
        filterAndShow();
        break;
    }
  }

  useEffect(()=>{
      filterAndShow();
    },[category,colour,search,showSearchBar]);
  
  useEffect(() =>{
    sorter();
  },[sortType])
  

 
 
  return (
    <div  className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
       {/* filter place  */}
       <div className="min-w-60">
          <p onClick={() => setShowFilter(!showFilter)} className="text-xl flex inline items-center cursor-pointer gap-2">FILTERS</p>
          <img src={assets.dropdown_icon} className={`h-3 inline ml-1 mt-[-6px] sm:hidden  ${showFilter ? 'rotate-90': ''}` } alt="" />
          {/* category filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden sm:block'}` }>
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2"><input type="checkbox" className="w-3" onChange={toggleCategory} value={"Headset"} />Headset</p>
              <p className="flex gap-2"><input type="checkbox" className="w-3" onChange={toggleCategory}value={"EarPad"} />EarPad</p>
              <p className="flex gap-2"><input type="checkbox" className="w-3" onChange={toggleCategory}value={"SmartWatch"} />SmartWatch</p>
            </div>
          </div>
          {/* subcategory field */}
          <div className={`border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden sm:block'}` }>
            <p className="mb-3 text-sm font-medium">COLOUR</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2"><input type="checkbox" className="w-3" onChange={toggleColour} value={"White"} />White</p>
              <p className="flex gap-2"><input type="checkbox" className="w-3" onChange={toggleColour}value={"Black"} />Black</p>
              <p className="flex gap-2"><input type="checkbox" className="w-3" onChange={toggleColour}value={"Green"} />Green</p>
            </div>
          </div>
       </div>

        {/* right side elements */}
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"GADGETS"}/>
          <select onChange={(e) => setSortType(e.target.value)}  className="border-2 border-gray-400 text-sm px-2">
            <option value="best">Sort by: Quality</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* all gadgets */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
             filterGadgets.map((item,key)=>
              <GadgetItem key={key} id={item._id} price={item.price} image={item.image} name={item.name}/>
            )
          }
        </div>
      </div> 
    </div>
  )
}

export default Collection
