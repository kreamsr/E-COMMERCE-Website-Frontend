import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contexts/ShopContext';
import { assets } from '../assets/assets';
import RelatedGadgets from '../components/RelatedGadgets';


const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart}  = useContext(ShopContext)
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size, setSize] =useState('')

  const getProductData = () => {
    products.map((item) => {
      if(item._id == productId){
        setProductData(item);
        setImage(item.image[0]);
        console.log(item,image)
        return null
      }
    })
  }

  useEffect(() => {
    getProductData();
  },[productData,products])
  
  return productData ?  (
    
<div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opcity-100'>
       {/* product data */}
      
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* product image  */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {
                  productData.image.map((item,key) => {
                    return (
                    <img onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={key} alt="" />
                  )})
                }
              </div>
              <div className="w-full sm:w-[80%]">
                <img src={image} alt="" className="w-full h-auto" />
              </div>
          </div>
          {/* product informations */}
          <div className="flex-1">
            <h className="font-medium text-2xl mt-2">{productData.name}</h>
            <div className="flex items-center gap-1 mt-2">
              <img className='w-3 5' src={assets.star_icon} alt="" />
              <img className='w-3 5'src={assets.star_icon} alt="" />
              <img className='w-3 5'src={assets.star_icon} alt="" />
              <img className='w-3 5'src={assets.star_icon} alt="" />
              <img className='w-3 5'src={assets.star_dull_icon} alt="" />
              <p className="pl-2">(112)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
            <p className="mt-5 text-gray-400 md:w-3/4">{productData.description}</p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {
                  productData.sizes.map((item,key) => {
                  return (
                    <button onClick={() => setSize(item)} className={`border border-gray-100 py-2 hover:bg-gray-200 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
                  )})
                }
              </div>
            </div>
            <button onClick={() => addToCart(productData._id, size)} className=" bg-black text-white px-8 py-3 text-sm active:bg-gray-400">ADD TO CART</button>
            <hr className='mt-8 sm:4/5'/>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original</p>
              <p>Cash on delivery is availale for this product</p>
              <p>Easy return and exchange policy availale within 10 days</p>
            </div>
          </div>
        </div>
  
        {/* description */}
        <div className="mt-20">
          <div className="flex">
            <b className="border border-gray-200 px-5 py-3  text-sm">Description</b>
            <p className="border border-gray-200 px-5 py-3 text-sm">Review 112</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 px-5 text-sm text-gray-500">
            <p>This website is dedicated to serve the community and well known for its quality, waranty as well trustworthiness. If yo want to know more about this platform as well as this company let us know. Get in touch with us with our social media acconts. INBOX US BE LUCKY </p>
            <p>This website is dedicated to serve the community and well known for its quality, waranty as well trustworthiness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, deserunt nam ducimus soluta maiores fugiat. </p>
          
          </div>
        </div>
        {/* related products */}

        <RelatedGadgets category={productData.category} colour={productData.subCategory}/>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
