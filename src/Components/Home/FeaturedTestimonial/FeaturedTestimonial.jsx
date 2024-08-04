import React from 'react'

import t1 from '../../../assets/home/featuretestimonial/t1.png'
import t2 from '../../../assets/home/featuretestimonial/t2.png'
import { FaLocationDot } from "react-icons/fa6";

const FeaturedTestimonial = () => {
  return (
    <div className='col-span-4 lg:col-span-2'>
        <h1 className='mx-[30px] mt-[30px] mb-[18px] font-medium text-lg'>Featured Testimonial</h1>
      <div className='bg-[#FFFFFF] md:mx-[30px] p-[30px] rounded-xl'>
      <div className='flex items-center border mb-[20px] rounded-xl'>
      <div >
      <img src={t1} className='p-[10px] max-w-fit' alt="" />
      </div>
      <div className='py-4 pl-2'>
     <div className='flex items-center text-[#5C635A]'>
     <FaLocationDot className='mr-[5px]' />
     <p className='text-[13px]'>123 Elm Street, New York</p>
     </div>
        <p className='my-2'><span className='font-medium text-[#232F3C] text-[14px]'>Healing Bodywork</span> 
         <i className='font-semibold text-[14px] text-[#156BCA]'> by Cort</i>
        </p>
        <p className='leading-[23px] text-[14px] text-[#5C635A]'>
        Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA] underline cursor-pointer'>Read more</span> 

        </p>
      </div>
      </div>


      <div className='flex items-center border mb-[20px] rounded-xl'>
      <div >
      <img src={t2} className='p-[10px] max-w-fit' alt="" />
      </div>
      <div className='py-4 pl-2'>
     <div className='flex items-center text-[#5C635A]'>
     <FaLocationDot className='mr-[5px]' />
     <p className='text-[13px]'>123 Elm Street, New York</p>
     </div>
        <p className='my-2'><span className='font-medium text-[#232F3C] text-[14px]'>Healing Bodywork</span> 
         <i className='font-semibold text-[14px] text-[#156BCA]'> by Cort</i>
        </p>
        <p className='leading-[23px] text-[14px] text-[#5C635A]'>
        Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA] underline cursor-pointer'>Read more</span> 

        </p>
      </div>
      </div>

        <div className='flex gap-2 justify-center'>
            <div className='rounded-full bg-[#156BCA] w-[9px] h-[9px]'></div>
            <div className='rounded-full opacity-45 bg-[#3B4633] w-[9px] h-[9px]'></div>
            <div className='rounded-full opacity-45 bg-[#3B4633] w-[9px] h-[9px]'></div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedTestimonial
