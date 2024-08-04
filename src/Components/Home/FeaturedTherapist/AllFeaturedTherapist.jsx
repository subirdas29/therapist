// import React from 'react'
import PropTypes from 'prop-types'


import { FaCar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const AllFeaturedTherapist = ({therapist}) => {

    const {photo,name,location,companyName}= therapist
    console.log(therapist)

  return (
    <div className='border rounded-xl w-full'>

        <div className='p-[10px]'>
            <img  src={photo} className='w-full' alt="" />
        </div>
       <div className='px-5 pt-2 pb-4'>
       <div>
            <h1 className='mb-2 font-medium text-[14px]'>{name}</h1>
        </div>
        <div className='text-[13px] text-[#5C635A]'>
            <div className='flex items-center'>
            <FaLocationDot className='mr-[7px]' />
            <p>{location}</p>
            </div>
            <div className='flex items-center'>
            <FaCar className='w-4 h-3 mr-[7px]' />
            <p>{companyName}</p>
            </div>
        </div>
       </div>
        <div>
            <button className='w-full underline rounded-b-xl py-3 bg-blue-500 text-[#FFFFFF]'>See Details</button>
        </div>

      
    </div>
  )
}
AllFeaturedTherapist.propTypes = {
    therapist: PropTypes.object.isRequired,
}

export default AllFeaturedTherapist
