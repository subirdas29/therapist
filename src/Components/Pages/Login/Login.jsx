import React from 'react'

import logsignbg from'../../../assets/loginandsignup-bg/log-sign-bg.png';

const Login = () => {
  return (
    <div className='mx-28 my-16 font-Poppins'>
      <div className='flex justify-between items-center'>
        <div>
            <h1 className='text-4xl text-[#4285F3]'>LOGO</h1>
           <div className='mt-[25px] mb-[40px]'>
           <p className='font-semibold text-3xl mb-[25px]'>Log In To Your Account</p>
           <p className='text-lg'>Welcome Back! Select a method to log in:</p>
           </div>
           <div className='flex justify-between'>
           <button className='rounded-lg px-10 py-3 bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] drop-shadow-lg w-[177.6px] h-[55px] mr-[48.4px]' >Google</button>
           <button className='rounded-lg px-10 py-3 bg-gradient-to-r from-[#298FFF] to-[#0778F5] w-[205px] h-[54px]'>Facebook</button>
           </div>
            <p className="divider my-[32px]">Or Continue with Email</p>
            <div>
           <div className='mb-[32px]'>
           <p>Email</p>
           <input type="text" name="" id="" placeholder='Enter your email' className='w-full px-4 py-3 rounded-lg border border-1' />
           </div>
          <div className='mb-[14px]'>
          <p>Password</p>
          <input type="text" placeholder='Enter your password' className='w-full px-4 py-3 rounded-lg border border-1' />
          </div>
            <div className='flex justify-between mb-[64px]'>
           <div className='flex'>
           <input type="checkbox" />
           <p>Remember me</p>
           </div>
                <p className= 'text-[#156BCA] underline'>Forget password?</p>
            </div>
            </div>
           <div className='text-center'>
           <button className='px-10 py-4 w-[271px] h-[54px] rounded-xl font-semibold text-lg text-[#FFFFFF] bg-[#156BCA] mb-[16px]'>Sign In</button>
           </div>
            <p className='text-center'> Don't Have an Account?<span className='underline text-[#156BCA] '> Create Account</span></p>
        </div>
        <div>
            <img src={logsignbg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
