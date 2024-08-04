// import React from 'react'

import CityState from "./CityState/CityState"
import Dashboard from "./Dashboard/Dashboard"
import FeaturedTherapist from "./FeaturedTherapist/FeaturedTherapist"
import Navbar from "./Navbar/Navbar"

const Home = () => {

  return (
    <div className="bg-[#EEF2F5]">
     <div className="grid grid-cols-5">
      <Dashboard className =' '></Dashboard>
      <div className="col-span-4">
      <Navbar></Navbar>
      <CityState></CityState>
      <FeaturedTherapist></FeaturedTherapist>
      </div>
     </div>

    </div>
  )
}

export default Home
