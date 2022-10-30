import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Name from '../components/Name'
import Navbar from '../components/Navbar'

const Naming = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-[1140px] mt-[60px]">
        <About />
        <Name />
        <Filter />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Naming