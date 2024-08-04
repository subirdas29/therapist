// import React from 'react'

import CityState from "./CityState/CityState"
import Dashboard from "./Dashboard/Dashboard"
import Navbar from "./Navbar/Navbar"

const Home = () => {

  return (
    <div className="bg-[#EEF2F5]">
     <div className="grid grid-cols-5">
      <Dashboard className =' '></Dashboard>
      <div className="col-span-4">
      <Navbar></Navbar>
      <CityState></CityState>
      </div>
     </div>

    </div>
  )
}

export default Home
