// import React from 'react'
import PropTypes from 'prop-types'

const AllPopularCity = ({city}) => {

    const {city01,city02,city03}= city
    console.log(city)
  return (
    <div>
      <div>
  <div className='px-[30px] py-5 flex justify-between  '>
    <p className='text-[#156BCA] text-[14px] underline cursor-pointer'>{city01}</p>
    <p className='text-[#156BCA] text-[14px] underline cursor-pointer'>{city02}</p>
    <p className='text-[#156BCA] text-[14px] underline cursor-pointer'>{city03}</p>
  </div>
<hr />
</div>
    </div>
  )
}

AllPopularCity.propTypes = {
    city: PropTypes.object.isRequired,
}

export default AllPopularCity
