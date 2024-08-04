
// import React from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import logsignbg from'../../../assets/loginandsignup-bg/log-sign-bg.png';
import google from '../../../assets/loginandsignup-bg/icon/google.ico'
import facebook from '../../../assets/loginandsignup-bg/icon/facebook.svg'
import iphonebg from '../../../assets/loginandsignup-bg/iphone-version/iPhone 14 & 15 Pro Max.png'




const Login = () => {
  return (
   <div >
   
     <div className='relative ' >
            <img className='block h-screen md:hidden w-full' src={iphonebg} alt="" />

            
            
        </div>
     <div className='md:mx-12 lg:mx-32 md:my-16 font-Poppins'>
  
      <div className='flex justify-between items-center'>

        {/* first part desktop & mobile */}


        <div className='  absolute bottom-0 md:static  w-full md:w-2/5 md:mr-16 lg:mr-24'>
       
           <div>
           <h1 className='text-[30px] md:text-[40px]  text-[#4285F3] font-poorrichard text-center md:text-left '>LOGO</h1>
           <p className='text-[#FFFFFF] text-center mb-8 md:hidden '>
           <span className='text-[14px] font-semibold'>Sign In</span> <span className='text-[14px] font-medium'> to view all the <br /> massage therapists</span>
           </p>
           </div>
          <div className='pt-2 pb-6 bg-white rounded-t-3xl'>
          <div className='mt-[25px] mb-[40px]'>
           <p className='font-semibold text-3xl md:text-left text-center'>Log In To Your Account</p>
           <p className='text-[14px] md:text-[16px] md:text-left text-center text-[#5C635A]  md:leading-[50px]'>Welcome Back! Select a method to log in:</p>
           </div>
          
          {/* Google & Facebook button */}
          <div className='flex justify-center md:justify-between '>
           <button className='rounded-lg px-6 md:px-8 lg:px-[54px] py-3 bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] drop-shadow-lg flex justify-center items-center mr-10 md:mr-4' > <img className='w-7 h-7' src={google} alt="" /><span>Google</span></button>
           <button className='rounded-lg px-6 md:px-8 lg:px-[54px] py-3 bg-gradient-to-r from-[#298FFF] to-[#0778F5]  text-[#FFFFFF] flex justify-center  items-center '> <img className='w-6 h-6 mr-2' src={facebook} alt="" /><span>Facebook</span></button>
           </div>

           {/* Email sign in section */}

          <div className='mx-4 md:mx-0'>
          <div>
          <p className="divider my-[28px] md:my-[32px] text-[14px] text-[#5C635A]">Or Continue with Email</p>
          </div>
            <div >

          {/* Email */}

          <div className='mb-4'>
           <p className='mb-2'>Email</p>
       
          <input type="text" name="" id=""className='bg-transparent w-full px-4 py-2 md:py-3 rounded-lg border border-1 focus:placeholder:opacity-0 placeholder:text-[#5C635A]'placeholder='Enter your email' />
       
           </div>

           {/* Password */}

          <div className='mb-[14px]'>
          <p className='mb-2'>Password 
         
          </p>
         <div className='relative'>
           
         <input type="text" placeholder='Enter your password' className='w-full px-4 py-2 md:py-3 rounded-lg border border-1 placeholder:text-[#5C635A] focus:placeholder:opacity-0' /> <FaRegEyeSlash className='absolute top-1/3 right-0 mr-2 text-[#5C635A] cursor-pointer ' />
         </div>
          </div>

          {/* Remember & Forget Password Section */}

            <div className='flex justify-between mb-[28px] md:mb-[64px]'>
           <div className='flex items-center'>
           <input type="checkbox" className='w-4 h-4' />
           <p className='ml-[10px] text-[14px] text-[#5C635A]'>Remember me</p>
           </div>
                <p className= 'text-[#156BCA] underline text-[14px] font-medium leading-[16px] cursor-pointer'>Forget password?</p>
            </div>
            </div>

          {/* SignIn Button */}

           <div className='text-center'>
           <button className=' w-[271px] h-[54px] rounded-xl font-semibold text-lg text-[#FFFFFF] bg-[#156BCA] mb-[16px]'>Sign In</button>
           </div>

          {/* Create Account section */}

            <div>
            <p className='text-center'> Don`t Have an Account?<span className='underline text-[#156BCA] cursor-pointer'> Create Account</span></p>
            </div>
          </div>
          </div>
        </div>

        {/* Second Part only desktop part */}

        <div className='w-3/5 relative rounded-lg hidden md:block' >
      

        <div className='bg-cover w-full  h-screen rounded-lg flex items-center justify-center ' style={{backgroundImage:`url(${logsignbg})`}}>
        <div className=' rounded-lg opacity-70 bg-[#152A16] flex justify-center items-center p-4 mx-3 lg:w-[341px] text-sm md:text-xl lg:text-[22px] leading-[35px] h-[143px]'>
            <p className='text-opacity-100'><span className='text-[#358eee]'>Sign In</span > <span className='text-[#FFFFFF]'>
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
