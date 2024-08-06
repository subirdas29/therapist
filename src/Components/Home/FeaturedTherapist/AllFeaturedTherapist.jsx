import PropTypes from 'prop-types';
import { FaCar, FaLocationDot } from "react-icons/fa6";

const AllFeaturedTherapist = ({ therapist, isBlue }) => {
  const { photo, name, location, companyName } = therapist;

  return (
    <div className='border rounded-xl w-full h-[400px] flex flex-col'>
      <div className='flex-grow p-[10px]'>
        <img src={photo} className='w-full h-full object-cover rounded-t-xl' alt="" />
      </div>
      <div className='px-5 pt-2 pb-2 flex-grow'>
        <h1 className='mb-2 font-medium text-[14px]'>{name}</h1>
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
      <div className='flex-shrink-0'>
        <button 
          className={`w-full underline rounded-b-xl py-3 ${isBlue ? 'bg-blue-500 text-[#FFFFFF]' : 'bg-[#D4E9FF] text-black'} `}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

AllFeaturedTherapist.propTypes = {
  therapist: PropTypes.object.isRequired,
  isBlue: PropTypes.bool,
};

export default AllFeaturedTherapist;
