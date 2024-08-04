import React from 'react'
import art from '../../../assets/home/cityandzipphoto/art.png'

const CityState = () => {
  return (
    <div className='flex justify-between m-[30px] rounded-xl bg-[#FFFFFF]'>
        <div className='py-[30px] pl-[30px] w-1/2'>
      <h1 className='font-medium text-[20px]'>I`m Looking for Massage Therapist Near...</h1>
        <p className='leading-[22.5px] mb-[30px] mt-2'>
        In using this site, I agree to be bound by the <span className=' underline text-[#156BCA] '>Terms of Service</span>  and  <span className=' underline text-[#156BCA] '>Privacy Policy</span>
        </p>
        <div className='flex items-center' >
            <input type="text" className='bg-[#EEF2F5] rounded-[10px] w-[470px] h-[50px] px-[11px] ' placeholder='ZIP code or city name' />
            <button className='text-[#FFFFFF] w-[83px] h-[40px] rounded-lg  bg-[#156BCA]'>GO</button>
        </div>
    </div>
    <div className='pr-[30px] py-5 '>
        <img src={art}  alt="" />
    </div>
    </div>
  )
}

export default CityState
