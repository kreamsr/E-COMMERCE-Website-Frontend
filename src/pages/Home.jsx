import React from 'react'
import Hero from '../components/Hero'
import LatestGadgets from '../components/LatestGadgets'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestGadgets />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </div>
  )
}

export default Home
