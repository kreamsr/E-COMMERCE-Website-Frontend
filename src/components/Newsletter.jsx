import React from 'react'

const Newsletter = () => {

    const submitHandler = (event)=> {
        event.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className="text-2xl font-medium text-bold text-gray-800">Subscribe and Get Discount</p>
        <p className="text-gray-400 py-3"  >it may be your chance to be selected randomly and get a prize and grear discount!</p>
        <form onSubmit={submitHandler} className="flex text-center py-2 justify-center">
            <input type='email' className="w-full outline-none md:w-1/2 h-[40px]" required placeholder='Enter Email'/>
            <button className="bg-black border-lg text-xs text-white px-10 cursor-pointer hover:bg-gray-600 ">SUBSCRIBE</button>
        </form>
    </div>
    
  )
}

export default Newsletter
