// import React from 'react'

import CityState from "./CityState/CityState"
import Dashboard from "./Dashboard/Dashboard"
import FeaturedTestimonial from "./FeaturedTestimonial/FeaturedTestimonial"
import FeaturedTherapist from "./FeaturedTherapist/FeaturedTherapist"
import Navbar from "./Navbar/Navbar"
import PopularCity from "./PopularCity/PopularCity"

const Home = () => {

  return (
    <div className="bg-[#EEF2F5] font-Poppins">
     <div className="grid grid-cols-4 md:grid-cols-5">
      <Dashboard className =' '></Dashboard>
      <div className="col-span-4">
      <Navbar></Navbar>
      <CityState></CityState>
      <FeaturedTherapist></FeaturedTherapist>
      <div className="grid grid-cols-4 mb-[30px]">
      <FeaturedTestimonial ></FeaturedTestimonial>
      <PopularCity ></PopularCity>
      </div>
      </div>
     </div>

    </div>
  )
}

export default Home
