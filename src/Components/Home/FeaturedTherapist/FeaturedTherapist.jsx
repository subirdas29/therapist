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
      <h1>Featured Therapist</h1>
      {
        therapists.map(therapist => <AllFeaturedTherapist key={therapist.id} therapist={therapist}></AllFeaturedTherapist>)
      }
    </div>
  )
}

export default FeaturedTherapist
