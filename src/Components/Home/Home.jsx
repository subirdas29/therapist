// import React from 'react'

import Dashboard from "./Dashboard/Dashboard"
import Navbar from "./Navbar/Navbar"

const Home = () => {

  return (
    <div>
     <div className="grid grid-cols-5">
      <Dashboard className =' row-span-11 '></Dashboard>
      <div className="col-span-4">
      <Navbar></Navbar>
      </div>
     </div>

    </div>
  )
}

export default Home
