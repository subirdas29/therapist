
import PropTypes from 'prop-types';

import cat from '../../../assets/home/dashboard/Category.png';
import list from '../../../assets/home/dashboard/listing.png';
import search from '../../../assets/home/dashboard/Search.png';
import paper from '../../../assets/home/dashboard/Paper.png';
import love from '../../../assets/home/dashboard/love.png';
import info from '../../../assets/home/dashboard/Info.png';
import set from '../../../assets/home/dashboard/Setting.png';
import dp from '../../../assets/home/nav/dp.png';
import logout from '../../../assets/home/nav/logout.png';
import { FaTimes } from 'react-icons/fa';

const DashboardModal = ({ user, handleLogOut, toggleModal }) => {
  return (
    <div className={`fixed top-0 right-0 w-1/2 h-full bg-white shadow-2xl drop-shadow-2xl z-50 transition-transform transform ${toggleModal ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
      <div className='bg-[#156BCA]'>
        <div className='flex justify-between items-center mb-4'>
          <FaTimes className='cursor-pointer m-4 text-white' onClick={toggleModal} />
        </div>
        <div className='flex flex-col items-end mr-6'>
          <img src={dp} className='w-[40px] h-[40px] mb-4' alt="" />
          {user && (
            <>
              <p className='text-[#FFFFFF] text-2xl'>{user.displayName}</p>
              <p className='text-[12px] text-[#1A2634]'>{user.email}</p>
            </>
          )}
          <button className='flex items-center mt-4 pb-8' onClick={handleLogOut}>
            <p className='text-[#F15E4A] font-medium text-[15px] mr-3'>LogOut</p>
            <img src={logout} alt="" />
          </button>
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex items-center py-4 px-6 bg-[#D4E9FF] border-l-4 border-l-[#102C4A]'>
          <img src={cat} alt="" />
          <p className='ml-3 text-[#152A16]'>Home</p>
        </div>
        <div className='flex items-center py-4 px-7'>
          <img src={list} alt="" />
          <p className='ml-3 text-[#5C635A]'>New Listing</p>
        </div>
        <div className='flex items-center py-4 px-7'>
          <img src={search} alt="" />
          <p className='ml-3 text-[#5C635A]'>Search</p>
        </div>
        <div className='flex items-center py-4 px-7'>
          <img src={paper} alt="" />
          <p className='ml-3 text-[#5C635A]'>About</p>
        </div>
        <div className='flex items-center py-4 px-7'>
          <img src={love} alt="" />
          <p className='ml-3 text-[#5C635A]'>Favorites</p>
        </div>
        <hr className='mx-4' />
        <div className='flex items-center py-4 px-7'>
          <img src={info} alt="" />
          <p className='ml-3 text-[#5C635A]'>Help Center</p>
        </div>
        <div className='flex items-center py-4 px-7'>
          <img src={set} alt="" />
          <p className='ml-3 text-[#5C635A]'>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;

DashboardModal.propTypes = {
  user: PropTypes.object,
  handleLogOut: PropTypes.func,
  toggleModal: PropTypes.func.isRequired,
};
