// import React from 'react'

import CityState from "./CityState/CityState"
import Dashboard from "./Dashboard/Dashboard"
import FeaturedTestimonial from "./FeaturedTestimonial/FeaturedTestimonial"
import FeaturedTherapist from "./FeaturedTherapist/FeaturedTherapist"
import Navbar from "./Navbar/Navbar"

const Home = () => {

  return (
    <div className="bg-[#EEF2F5] font-Poppins">
     <div className="grid grid-cols-5">
      <Dashboard className =' '></Dashboard>
      <div className="col-span-4">
      <Navbar></Navbar>
      <CityState></CityState>
      <FeaturedTherapist></FeaturedTherapist>
      <FeaturedTestimonial className="col-span-2"></FeaturedTestimonial>
      </div>
     </div>

    </div>
  )
}

export default Home
