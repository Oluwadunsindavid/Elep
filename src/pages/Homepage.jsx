import React from 'react'
import Hero from '../components/HomeComp/Hero'
import Sect from '../components/HomeComp/Sect'
import Mission from '../components/HomeComp/Mission'
import Services from '../components/HomeComp/Services'
import Partners from '../components/HomeComp/Partners'
import Testimonials from '../components/HomeComp/Testimonials'
import CEO from '../components/HomeComp/CEO'
import Transform from '../components/HomeComp/Transform'
import Booking from '../components/HomeComp/Booking'
import Contact from '../components/HomeComp/Contact'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Sect/>
        <Mission/>
        <Services/>
        <Partners/>
        <Testimonials/>
        <CEO/>
        <Transform/>
        <Booking/>
        <Contact/>
    </div>
  )
}

export default Homepage