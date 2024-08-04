
import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import logsignbg from'../../../assets/loginandsignup-bg/log-sign-bg.png';

import iphonebg from '../../../assets/loginandsignup-bg/iphone-version/iPhone 14 & 15 Pro Max.png'
import StartSignUp from './StartSignUp';

const SignUp = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };

  return (
    <div className="relative ">

        {

          !isCreatingAccount? (
           <div>
             <div className="md:hidden">
              <img className="block min-h-screen w-full" src={iphonebg} alt="" />
    
              <div className="absolute top-10">
                <div>
                  <h1 className="text-[40px] text-[#4285F3] font-poorrichard text-center md:text-left">
                    LOGO
                  </h1>
                </div>
    
                <div className="mt-[12px] mb-[36px]">
                  <p className="font-semibold text-3xl md:text-left text-center mx-[20px] text-[#1A2531]">
                    Sign In <span>To Your Account</span>
                  </p>
    
                  <p className="text-[14px] md:text-[16px] md:text-left text-[#D1D1D1] md:leading-[28px] mt-4 block md:hidden text-left mx-[25px]">
                    Welcome Back! By click the sign up button, you agree to Zenitood Terms and Service and acknowledge the{' '}
                    <span className="cursor-pointer underline text-[#4285F3]">Privacy and Policy</span>
                  </p>
                </div>
    
                <div className="mx-[45px] rounded-2xl opacity-70 bg-[#152A16] flex justify-center items-center p-4 lg:w-[341px] text-[20px] lg:hidden leading-[35px] h-[143px]">
                  <p className="text-opacity-100 text-center">
                    <span className="text-[#358eee] cursor-pointer" onClick={handleCreateAccountClick}>
                      Create Account
                    </span>
                    <br />
                    <span className="text-[#FFFFFF]">Fill in Your Information</span>
                  </p>
                </div>
              </div>
            
            </div>
          

            <div className='md:mx-12 lg:mx-32 md:my-16 font-Poppins'>
  
  <div className='flex justify-between items-center'>

    {/* first part */}


    <div className='hidden md:block absolute bottom-0 md:static  w-full md:w-2/5 md:mr-16 lg:mr-24'>
   
       <div>
       <h1 className='text-[40px]  text-[#4285F3] font-poorrichard text-center md:text-left '>LOGO</h1>
       <p className='text-[#FFFFFF] text-center mb-8 md:hidden '>
       <span className='text-[18px] font-semibold'>Create Account</span> <br /><span className='text-[18px] font-medium '> Fill in Your Information</span>
       </p>
       </div>
      <div className='pt-2 pb-6  bg-white rounded-t-badge'>
      <div className='mt-[25px] mb-[30px]'>
       <p className='font-semibold text-3xl md:text-left text-center'>Sign In <span className="hidden md:inline">To Your Account</span></p>
       <p className='text-[14px] md:text-[16px] md:text-left text-center text-[#5C635A]  md:leading-[28px] mt-4 hidden md:block'>Welcome Back! By click the sign up button, you`re agree to Zenitood Terms and Service and acknlowledge the <br /><span className="cursor-pointer underline text-[#4285F3]">Privacy and Policy</span></p>
       </div>
     
      <div className='mx-4 md:mx-0'>
   
        <div >
        {/* Name */}
        <div className='mb-4'>
       <p className='mb-2'>Name</p>
   
      <input type="text" name="" id=""  
       
        className='bg-transparent w-full px-4 py-2 md:py-3 rounded-lg border border-1 focus:placeholder:opacity-0 placeholder:text-[#5C635A]'placeholder='@username'  />
   
       </div>

            {/* Email */}

       <div className='mb-4'>
       <p className='mb-2'>Email</p>
   
      <input type="text" name="" id=""  
       
        className='bg-transparent w-full px-4 py-2 md:py-3 rounded-lg border border-1 focus:placeholder:opacity-0 placeholder:text-[#5C635A]'placeholder='Enter your email'  />
   
       </div>

       {/* Password */}

      <div className='mb-[14px]'>
      <p className='mb-2'>Password </p>
     <div className='relative'>
       
     <input type="text" placeholder='Enter your password' className='w-full px-4 py-2 md:py-3 rounded-lg border border-1 placeholder:text-[#5C635A] focus:placeholder:opacity-0' /> <FaRegEyeSlash className='absolute top-1/3 right-0 mr-2 text-[#5C635A] cursor-pointer ' />
     </div>
      </div>

      {/* Confirm Password */}

      <div className='mb-[14px]'>
      <p className='mb-2'>Re-type Password </p>
     <div className='relative'>
       
     <input type="text" placeholder='Enter your password' className='w-full px-4 py-2 md:py-3 rounded-lg border border-1 placeholder:text-[#5C635A] focus:placeholder:opacity-0' /> <FaRegEyeSlash className='absolute top-1/3 right-0 mr-2 text-[#5C635A] cursor-pointer ' />
     </div>
      </div>

      {/* Terms of Service */}
      
        <div className='flex justify-between mb-[28px] md:mb-[42px]'>
       <div className='flex items-center'>
       <input type="checkbox" className='w-4 h-4' />
       <p className='ml-[10px] text-[14px] text-[#4285F3]'>Accept Terms of Service</p>
       </div>
          
        </div>
        </div>
      {/* Sign Up button  */}
      <div className='text-center'>
       <button className=' w-[271px] h-[54px] rounded-xl font-semibold text-lg text-[#FFFFFF] bg-[#156BCA] mb-[16px]'>Sign Up</button>
       </div>

       {/* Login section */}
        <div>
        <p className='text-center'> Already Have an Account?<span className='underline text-[#156BCA] cursor-pointer'> Log in</span></p>
        </div>
      </div>
      </div>
    </div>

    {/* Second Part only desktop part */}

    <div className='w-3/5 relative rounded-lg hidden md:block' >
  

    <div className='bg-cover w-full  h-screen rounded-2xl flex items-center justify-center ' style={{backgroundImage:`url(${logsignbg})`}}>
    <div className=' rounded-2xl  opacity-70 bg-[#152A16] flex justify-center items-center p-4 mx-3 lg:w-[341px] text-sm md:text-xl lg:text-[22px] leading-[35px] h-[143px]'>
        <p className='text-opacity-100 text-center'><span className='text-[#358eee]'>Create Account</span >  <br /><span className='text-[#FFFFFF]'>
        Fill in Your Information</span></p>
    </div>
    <div className='flex gap-2 absolute bottom-10'>
    <div className='w-[10px] h-[10px] bg-[#156BCA]   rounded-full'></div>
    <div className='w-[10px] h-[10px] bg-[#3B463373] rounded-full'></div>
    <div className='w-[10px] h-[10px] bg-[#3B463373] rounded-full'></div>
    </div>
    </div>
    </div>
  </div>
</div>








           </div>
          ):(
            <StartSignUp></StartSignUp>
      
          )
        }
        
    
   </div>
  )
}

export default SignUp
