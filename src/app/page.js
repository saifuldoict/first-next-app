import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Testimonials/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default page
