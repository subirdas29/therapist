import React from 'react'
import art from '../../../assets/home/cityandzipphoto/art.png'
import bg from '../../../assets/home/cityandzipphoto/Vector.png'

const CityState = () => {
  return (
    <div className='flex flex-col lg:flex-row  justify-between my-[30px] md:m-[30px] rounded-xl bg-[#FFFFFF] '  >

        <div className='py-6 lg:py-[30px] px-[16px] md:pl-[30px] '>
      <h1 className='font-medium text-[18px] md:text-[20px]'>I`m Looking for Massage Therapist Near...</h1>
        <p className='leading-[22.5px] mb-[30px] mt-2'>
        In using this site, I agree to be bound by the <span className=' underline text-[#156BCA] '>Terms of Service</span>  and  <span className=' underline text-[#156BCA] '>Privacy Policy</span>
        </p>
      <div className='hidden lg:block'>
      <div className='flex items-center' >
            <input type="text" className='bg-[#EEF2F5] rounded-[10px] w-[470px] h-[50px] px-[11px] ' placeholder='ZIP code or city name' />
            <button className='text-[#FFFFFF] w-[83px] h-[40px] rounded-lg  bg-[#156BCA]'>GO</button>
        </div>
      </div>
    </div>
    <div className=' py-5 bg-cover mx-auto'>
        <img className="  lg:min-w-fit" src={art} style={{backgroundImage:`url(${bg})`}}  alt="" />
    </div>
   <div className='block lg:hidden '>
   <div className='flex items-center px-[16px] py-6 md:p-[30px] ' >
            <input type="text" className='bg-[#EEF2F5] rounded-[10px] w-[470px] h-[50px] px-[11px] ' placeholder='ZIP code or city name' />
            <button className='text-[#FFFFFF] w-[83px] h-[40px] rounded-lg  bg-[#156BCA]'>GO</button>
        </div>
   </div>
    </div>
  )
}

export default CityState
