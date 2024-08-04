import React from 'react'

import cat from '../../../assets/home/dashboard/Category.png'
import list from '../../../assets/home/dashboard/listing.png'
import search from '../../../assets/home/dashboard/Search.png'
import paper from '../../../assets/home/dashboard/Paper.png'
import love from '../../../assets/home/dashboard/love.png'
import info from '../../../assets/home/dashboard/Info.png'
import set from '../../../assets/home/dashboard/Setting.png'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-[#FFFFFF] border-r-2 border-b-2 border-r-[#E7E7E7] hidden md:block'>
         <h1 className='text-[42px]  text-[#4285F3] font-poorrichard text-center my-9'>LOGO</h1>
      <div className=''>
      <div className='flex items-center  py-4 px-6 bg-[#D4E9FF] border-l-4 border-l-[#102C4A]'>
        <img src={cat} alt="" />
      <p className='ml-3 text-[#152A16]'>Home</p>
      </div>
     <div className=' flex items-center  py-4 px-7'>
     <img src={list} alt="" />
     <p className='ml-3 text-[#5C635A]'>New Listing</p>
     </div>
      <div className=' flex items-center py-4 px-7'>
        <img src={search} alt="" />
      <p className='ml-3 text-[#5C635A]'>Search </p>
      </div>
      <div className=' flex items-center py-4 px-7'>
      <img src={paper} alt="" />
      <p className='ml-3 text-[#5C635A]'>About</p>
      </div>
   
      <div className=' flex items-center px-7 pt-4 pb-6'>
      <img src={love} alt="" />
      <p className='ml-3 text-[#5C635A]'>Favorites</p>
      </div>
      <hr className='mx-4'/> 

      <div className=' flex items-center px-7 pb-4 pt-6'>
      <img src={info} alt="" />
      <p className='ml-3 text-[#5C635A]'>Help Center</p>
      </div>
      
      <div className=' flex items-center py-4 px-7'>
      <img src={set} alt="" />
      <p className='ml-3 text-[#5C635A]'>Settings</p>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
