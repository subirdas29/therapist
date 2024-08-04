import React from 'react'

const Dashboard = () => {
  return (
    <div className=' border-r-2 border-b-2 border-r-[#E7E7E7]'>
         <h1 className='text-[40px]  text-[#4285F3] font-poorrichard text-center '>LOGO</h1>
      <div className='mx-5'>
      <p className='mb-[30px]'>Home</p>
      <p className='mb-[30px]'>New Listing</p>
      <p className='mb-[30px]'>Search </p>
      <p className='mb-[30px]'>About</p>
   
      <p className=' mb-[25px]'>Favourites</p>
      <hr className='mb-[25px]' /> 
      <p className='mb-[30px] '>Help Center</p>
      
      <p className='mb-[30px]'>Settings</p>
      </div>
    </div>
  )
}

export default Dashboard
