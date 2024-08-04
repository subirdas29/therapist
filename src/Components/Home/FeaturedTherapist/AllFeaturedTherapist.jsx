// import React from 'react'
import PropTypes from 'prop-types'
const AllFeaturedTherapist = ({therapist}) => {

    const {photo,name,location,companyName}= therapist
    console.log(therapist)

  return (
    <div>

    

      <p>{photo}</p>
      <p>{name}</p>
      <p>{location}</p>
      <p>{companyName}</p>
    </div>
  )
}
AllFeaturedTherapist.propTypes = {
    therapist: PropTypes.object.isRequired,
}

export default AllFeaturedTherapist
