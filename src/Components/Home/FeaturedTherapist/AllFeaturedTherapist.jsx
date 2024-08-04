// import React from 'react'
import PropTypes from 'prop-types'
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
            <h1>{name}</h1>
        </div>
        <div>
            <p>{location}</p>
            <p>{companyName}</p>
        </div>
       </div>
        <div>
            <button className='w-full underline rounded-b-xl py-3 bg-blue-500'>See Details</button>
        </div>

      
    </div>
  )
}
AllFeaturedTherapist.propTypes = {
    therapist: PropTypes.object.isRequired,
}

export default AllFeaturedTherapist
