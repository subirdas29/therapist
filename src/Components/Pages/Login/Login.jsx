import React from 'react'

import logsignbg from'../../../assets/loginandsignup-bg/log-sign-bg.png';
import google from '../../../assets/loginandsignup-bg/icon/google.ico'
import facebook from '../../../assets/loginandsignup-bg/icon/facebook.svg'
import iphonebg from '../../../assets/loginandsignup-bg/iphone-version/iPhone 14 & 15 Pro Max.png'
const Login = () => {
  return (
   <div className='relative'>
     <div >
            <img className='block md:hidden w-full' src={iphonebg} alt="" />
        </div>
     <div className='md:mx-20 lg:mx-32 md:my-16 font-Poppins'>
       
      <div className='flex justify-between items-center'>

        {/* first part */}


        <div className='absolute md:static bg-white top-0 lg:w-2/5 mr-16 lg:mr-24'>
            <h1 className='text-[40px]  text-[#4285F3] font-poorrichard'>LOGO</h1>
           <div className='mt-[25px] mb-[40px]'>
           <p className='font-semibold text-3xl '>Log In To Your Account</p>
           <p className='text-[16px] text-[#5C635A] leading-[50px]'>Welcome Back! Select a method to log in:</p>
           </div>
           <div className='flex justify-between'>
           <button className='rounded-lg px-[54px] py-3 bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] drop-shadow-lg flex justify-center items-center mr-2' > <img className='w-7 h-7' src={google} alt="" /><span>Google</span></button>
           <button className='rounded-lg px-[54px] py-3 bg-gradient-to-r from-[#298FFF] to-[#0778F5]  text-[#FFFFFF] flex justify-center  items-center'> <img className='w-6 h-6 mr-2' src={facebook} alt="" /><span>Facebook</span></button>
           </div>
            <p className="divider my-[32px] text-[14px] text-[#5C635A]">Or Continue with Email</p>
            <div>
           <div className='mb-[32px]'>
           <p>Email</p>
           <input type="text" name="" id="" placeholder='Enter your email'  className='w-full px-4 py-3 rounded-lg border border-1' />
           </div>
          <div className='mb-[14px]'>
          <p>Password</p>
          <input type="text" placeholder='Enter your password' className='w-full px-4 py-3 rounded-lg border border-1' />
          </div>
            <div className='flex justify-between mb-[64px]'>
           <div className='flex items-center'>
           <input type="checkbox" className='w-4 h-4' />
           <p className='ml-[10px] text-[14px] text-[#5C635A]'>Remember me</p>
           </div>
                <p className= 'text-[#156BCA] underline text-[14px] font-medium leading-[14px] '>Forget password?</p>
            </div>
            </div>
           <div className='text-center'>
           <button className='px-10 py-4 w-[271px] h-[54px] rounded-xl font-semibold text-lg text-[#FFFFFF] bg-[#156BCA] mb-[16px]'>Sign In</button>
           </div>
            <p className='text-center'> Don't Have an Account?<span className='underline text-[#156BCA] '> Create Account</span></p>
        </div>

        {/* Second Part and desktop part */}

        <div className='w-3/5 relative rounded-lg hidden md:block' >
      

        <div className='bg-cover w-full  h-screen rounded-lg flex items-center justify-center ' style={{backgroundImage:`url(${logsignbg})`}}>
        <div className=' rounded-lg opacity-70 bg-[#152A16] flex justify-center items-center p-4 mx-3 lg:w-[341px] text-sm lg:text-[22px] leading-[35px] h-[143px]'>
            <p className='text-opacity-100'><span className='text-[#156BCA]'>Sign In</span > <span className='text-[#FFFFFF]'>
            to view all the <br />massage therapists</span></p>
        </div>
        <div className='flex gap-2 absolute bottom-10'>
        <div className='w-[10px] h-[10px] bg-[#3B463373] rounded-full'></div>
        <div className='w-[10px] h-[10px] bg-[#156BCA] rounded-full'></div>
        <div className='w-[10px] h-[10px] bg-[#3B463373] rounded-full'></div>
        </div>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Login
