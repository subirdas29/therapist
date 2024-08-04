import React, { useEffect, useState } from 'react'
import AllFeaturedTherapist from './AllFeaturedTherapist'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const FeaturedTherapist = () => {
    const [therapists, setTherapist] = useState([])

     useEffect(()=>{
        fetch('therapist.json')
        .then(res=>res.json())
        .then(data=>setTherapist(data))
     },[])

  return (
   <div>
    <h1 className='mx-[30px] mt-[30px] mb-[18px] font-medium text-lg'>Featured Therapist</h1>
     <div className='bg-[#FFFFFF] mx-[30px] rounded-xl'>
      
      <div className='flex gap-6 rounded-xl  p-[30px]'>
      <div className='flex items-center '><FaAngleLeft className='text-4xl bg-[#D4E9FF] text-[#152A16]  rounded-full p-2 ' /></div>
      {
        therapists.map(therapist => <AllFeaturedTherapist key={therapist.id} therapist={therapist}></AllFeaturedTherapist>)
      }
      <div className='flex items-center '><FaAngleRight className='text-4xl bg-[#156BCA]  text-[#FFFFFF] rounded-full p-2 ' /></div>
      </div>
    </div>
   </div>
  )
}

export default FeaturedTherapist
