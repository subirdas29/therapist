import React, { useContext } from 'react'
import dp from '../../../assets/home/nav/dp.png'
import notification from '../../../assets/home/nav/notification.png'
import notificationmbl from '../../../assets/home/nav/notification-mbl.png'
import logout from '../../../assets/home/nav/logout.png'
import menu from '../../../assets/home/nav/Vector.png'
import { FaAngleDown } from "react-icons/fa6";
import { AuthContext } from '../../../providers/AuthProvider'
const Navbar = () => {

  const {user} = useContext(AuthContext)
    return (
    <div>
     <div className='flex px-[30px] py-[24px] justify-between border-b-2 border-b-[#E7E7E7] bg-[#FFFFFF]'>
     <div >
     <h1 className='text-[32px]  text-[#4285F3] font-poorrichard text-center  md:hidden'>LOGO</h1>
      <div className='hidden md:flex' >
      <img src={dp} className='w-[40px] h-[40px]' alt="" />
        <div className='ml-3'>
        <div className='flex items-center justify-between'>
        <p >sagar soni</p>
        <FaAngleDown />
        </div>
        <p>sagor@gmail.com</p>
        </div>
      </div>
      </div>


      <div className='hidden md:flex items-center divide-x-2'>
        <img className='w-10 h-10 mr-5' src={notification} alt="" />
        <div className='flex items-center '>
        <p className='ml-5 mr-3 text -[#F15E4A] font-medium text-[15px]'>LogOut</p>
        <img src={logout} alt="" />
        </div>
      </div>

    <div className='flex md:hidden'>
      <img className='w-6 h-6' src={notificationmbl} alt="" />
      <img className='w-6 h-6 ml-3' src={menu} alt="" />
    </div>

     </div>
    </div>
  )
}

export default Navbar
