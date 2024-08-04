import React, { useEffect, useState } from 'react'
import AllFeaturedTherapist from './AllFeaturedTherapist'

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
     <div className='bg-[#FFFFFF] m-[30px] rounded-xl'>
      
      <div className='flex gap-6 rounded-xl  p-[30px]'>
      {
        therapists.map(therapist => <AllFeaturedTherapist key={therapist.id} therapist={therapist}></AllFeaturedTherapist>)
      }
      </div>
    </div>
   </div>
  )
}

export default FeaturedTherapist
