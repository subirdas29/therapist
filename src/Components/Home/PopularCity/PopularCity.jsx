import React, { useEffect, useState } from 'react'
import AllPopularCity from './AllPopularCity'

const PopularCity = () => {

    const [cities, setCities] = useState([])

    useEffect(()=>{
        fetch('cities.json')
        .then(res=> res.json())
        .then(data => setCities(data))
    },[])



  return (
    <div className='col-span-2 mr-[30px]' >
      <div>
      <h1 className='mx-[30px] mt-[30px] mb-[18px] font-medium text-lg'>Popular Cities</h1>
      </div>
      <div className='bg-[#FFFFFF] rounded-xl'>
    
    {
        cities.map(city => <AllPopularCity key={city.id} city = {city}></AllPopularCity>)
    }
      
      </div>
   
    </div>
  )
}

export default PopularCity
