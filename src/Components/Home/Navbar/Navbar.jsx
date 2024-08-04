import React from 'react'
import dp from '../../../assets/home/nav/dp.png'
const Navbar = () => {
  return (
    <div>
     <div className='flex justify-between border-b-2 border-b-[#E7E7E7] bg-[#FFFFFF]'>
     <div className='flex'>
        <img src={dp} className='w-4 h-4' alt="" />
        <div>
        <p>sagar soni</p>
        <p>sagor@gmail.com</p>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Navbar
