import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
          <Title text1={'ABOUT'} text2={'US'} />
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-10 ">
          <img src={assets.loo} alt="" className="w-full max-w-[480px]" />
          <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo reiciendis deleniti .</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus minus, totam, quisquam itaque aperiam eius q</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam beatae veniam nihil, dolore fuga.</p>
          </div>
        </div>


        <div className="text-xl py-4">
          <Title text1={'WHAT MAKES US'} text2={'PERFECT'} />
        </div>
        <div className="mb-20 flex flex-col md:flex-row text-sm gap-5 ">
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Quality Assurance:</b>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti ullam fugit corporis.</p>
          </div>
          <div className="border px-10 border-gray-300 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Convinience:</b>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti ullam fugit corporis.</p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti ullam fugit corporis.</p>
          </div>
        </div>
        <Newsletter />
    </div>
  )
}

export default About
