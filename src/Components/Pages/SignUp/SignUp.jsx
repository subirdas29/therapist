import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa";
import logsignbg from '../../../assets/loginandsignup-bg/log-sign-bg.png';
import iphonebg from '../../../assets/loginandsignup-bg/iphone-version/iPhone 14 & 15 Pro Max.png';
import { AuthContext } from '../../../providers/AuthProvider';

const SignUp = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };

  const {createUser,userProfile} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSignup = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;

    console.log(name, email, password, confirmpassword);

    createUser (email,password)
    .then(result =>{
      console.log(result.user);
      e.target.reset();
      navigate('/home');
      updateUserProfile(name)
    })
    .catch(error=>{
      console.error(error);
    })
    
  };
  const updateUserProfile =(name)=>
    {
     const profile={
       displayName:name
     }
     userProfile(profile)
     .then(() => {})
     .catch((error) => {
       console.error(error)
     });
    }


  return (
    <div className="relative">
      
      {/* Mobile View */}
      <div className="md:hidden">
        {!isCreatingAccount && (
          <div>
            <img className="block min-h-screen w-full" src={iphonebg} alt="" />
            <div className="absolute top-10">
              <div>
                <h1 className="text-[40px] text-[#4285F3] font-poorrichard text-center md:text-left">LOGO</h1>
              </div>
              <div className="mt-[12px] mb-[36px]">
                <p className="font-semibold text-3xl md:text-left text-center mx-[20px] text-[#1A2531]">
                  Sign In <span>To Your Account</span>
                </p>
                <p className="text-[14px] md:text-[16px] md:text-left text-[#D1D1D1] md:leading-[28px] mt-4 block md:hidden text-left mx-[25px]">
                  Welcome Back! By clicking the sign-up button, you agree to Zenitood Terms and Service and acknowledge the{' '}
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
        )}
        {isCreatingAccount && (
          <div className="absolute  w-full h-screen">
            <div className=' min-h-screen relative'>
              <img className='w-full min-h-screen' src={iphonebg} alt="" />
              <div className='absolute bottom-0 min-w-full justify-center items-center'>
              <div className=''>
           <h1 className='text-[40px]  text-[#4285F3] font-poorrichard text-center md:text-left '>LOGO</h1>
           <p className='text-[#FFFFFF] text-center mb-8 md:hidden '>
           <span className='text-[18px] font-semibold'>Create Account</span> <br /><span className='text-[18px] font-medium '> Fill in Your Information</span>
           </p>
           </div>


           <div className='pt-2 pb-6 w  bg-white rounded-t-badge'>
          <div className='mt-[25px] mb-[30px]'>
           <p className='font-semibold text-3xl md:text-left text-center'>Sign In <span className="hidden md:inline">To Your Account</span></p>
           <p className='text-[14px] md:text-[16px] md:text-left text-center text-[#5C635A]  md:leading-[28px] mt-4 hidden md:block'>Welcome Back! By click the sign up button, you`re agree to Zenitood Terms and Service and acknlowledge the <br /><span className="cursor-pointer underline text-[#4285F3]">Privacy and Policy</span></p>
           </div>
         
          <div className='mx-4 md:mx-0'>
       
           <form onSubmit={handleSignup}>
           <div >
            {/* Name */}
            <div className='mb-4'>
           <p className='mb-2'>Name</p>
       
          <input type="text" name="name" id=""  
           
            className='bg-transparent w-full px-4 py-2 md:py-3 rounded-lg border border-1 focus:placeholder:opacity-0 placeholder:text-[#5C635A]'placeholder='@username'  />
       
           </div>

                {/* Email */}

           <div className='mb-4'>
           <p className='mb-2'>Email</p>
       
          <input type="email" name="email" id=""  
           
            className='bg-transparent w-full px-4 py-2 md:py-3 rounded-lg border border-1 focus:placeholder:opacity-0 placeholder:text-[#5C635A]'placeholder='Enter your email'  />
       
           </div>

           {/* Password */}

          <div className='mb-[14px]'>
          <p className='mb-2'>Password </p>
         <div className='relative'>
           
         <input type="password" name="password" placeholder='Enter your password' className='w-full px-4 py-2 md:py-3 rounded-lg border border-1 placeholder:text-[#5C635A] focus:placeholder:opacity-0' /> <FaRegEyeSlash className='absolute top-1/3 right-0 mr-2 text-[#5C635A] cursor-pointer ' />
         </div>
          </div>

          {/* Confirm Password */}

          <div className='mb-[14px]'>
          <p className='mb-2'>Re-type Password </p>
         <div className='relative'>
           
         <input type="password" name="confirmpassword" placeholder='Enter your password' className='w-full px-4 py-2 md:py-3 rounded-lg border border-1 placeholder:text-[#5C635A] focus:placeholder:opacity-0' /> <FaRegEyeSlash className='absolute top-1/3 right-0 mr-2 text-[#5C635A] cursor-pointer ' />
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
           </form>

           {/* Login section */}
            <div>
            <p className='text-center'> Already Have an Account?<NavLink to='/login' className='underline text-[#156BCA] cursor-pointer'> Log in</NavLink></p>
            </div>
          </div>
          </div>




              </div>
            </div>
          </div>
        )}
      </div>
      {/* Desktop View */}
      <div className="hidden md:flex md:mx-12 lg:mx-32 md:my-16 font-Poppins">
        <div className='flex justify-between items-center w-full'>
          <div className='absolute bottom-0 md:static w-full md:w-2/5 md:mr-16 lg:mr-24'>
            <div>
              <h1 className='text-[40px] text-[#4285F3] font-poorrichard text-center md:text-left'>LOGO</h1>
              <p className='text-[#FFFFFF] text-center mb-8 md:hidden'>
                <span className='text-[18px] font-semibold'>Create Account</span>
                <br />
                <span className='text-[18px] font-medium'> Fill in Your Information</span>
              </p>
            </div>
            <div className='pt-2 pb-6 bg-white rounded-t-badge'>
              <div className='mt-[25px] mb-[30px]'>
                <p className='font-semibold text-3xl md:text-left text-center'>Sign In <span className="hidden md:inline">To Your Account</span></p>
                <p className='text-[14px] md:text-[16px] md:text-left text-center text-[#5C635A] md:leading-[28px] mt-4 hidden md:block'>
                  Welcome Back! By clicking the sign-up button, you agree to Zenitood Terms and Service and acknowledge the <br /><span className="cursor-pointer underline text-[#4285F3]">Privacy and Policy</span>
                </p>
              </div>
              <div className='mx-4 md:mx-0'>
                <div className='bg-white rounded-lg '>
                  <form onSubmit={handleSignup}>
                    {/* Form Fields */}
                    <div className='mb-4'>
                      <label className='block mb-2'>Name</label>
                      <input type="text" name="name" className='w-full px-4 py-2 border rounded-lg' placeholder='@username' />
                    </div>
                    <div className='mb-4'>
                      <label className='block mb-2'>Email</label>
                      <input type="email" name="email" className='w-full px-4 py-2 border rounded-lg' placeholder='Enter your email' />
                    </div>
                    <div className='mb-4'>
                      <label className='block mb-2'>Password</label>
                      <div className='relative'>
                        <input type="password" name="password" className='w-full px-4 py-2 border rounded-lg' placeholder='Enter your password' />
                        <FaRegEyeSlash className='absolute top-2 right-3 text-gray-500 cursor-pointer' />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <label className='block mb-2'>Re-type Password</label>
                      <div className='relative'>
                        <input type="password" name="confirmpassword" className='w-full px-4 py-2 border rounded-lg' placeholder='Re-enter your password' />
                        <FaRegEyeSlash className='absolute top-2 right-3 text-gray-500 cursor-pointer' />
                      </div>
                    </div>
                    <div className='flex items-center mb-4'>
                      <input type="checkbox" className='w-4 h-4' />
                      <label className='ml-2 text-blue-600'>Accept Terms of Service</label>
                    </div>
                    <div className='text-center'>
           <button className=' w-[271px] h-[54px] rounded-xl font-semibold text-lg text-[#FFFFFF] bg-[#156BCA] mb-[16px]'>Sign Up</button>
           </div>
                  </form>
                  <div className='mt-4 text-center'>
                    <p>Already Have an Account? <NavLink to='/login' className='text-blue-600 underline'>Log in</NavLink></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-3/5 relative rounded-lg hidden md:block'>
            <div className='bg-cover w-full h-screen rounded-2xl flex items-center justify-center' style={{ backgroundImage: `url(${logsignbg})` }}>
              <div className='rounded-2xl opacity-70 bg-[#152A16] flex justify-center items-center p-4 mx-3 lg:w-[341px] text-sm md:text-xl lg:text-[22px] leading-[35px] h-[143px]'>
                <p className='text-opacity-100 text-center'><span className='text-[#358eee]'>Create Account</span> <br /><span className='text-[#FFFFFF]'>Fill in Your Information</span></p>
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
  );
};

export default SignUp;





// // import { FaRegEyeSlash } from "react-icons/fa6";
// // import logsignbg from'../../../assets/loginandsignup-bg/log-sign-bg.png';

// import iphonebg from '../../../assets/loginandsignup-bg/iphone-version/iPhone 14 & 15 Pro Max.png'
// import StartSignUp from './StartSignUp';
// // import { NavLink } from 'react-router-dom';

// const SignUp = () => {
//   const [isCreatingAccount, setIsCreatingAccount] = useState(false);

//   const handleCreateAccountClick = () => {
//     setIsCreatingAccount(true);
//   };

//   const handlesignup = e =>{

//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmpassword = e.target.confirmpassword.value;
//     console.log(name,email,password,confirmpassword);
//   }

//   return (
//     <div className="relative ">

//         {

//           !isCreatingAccount? (
//            <div>
//              <div className="md:hidden">
//               <img className="block min-h-screen w-full" src={iphonebg} alt="" />
    
//               <div className="absolute top-10">
//                 <div>
//                   <h1 className="text-[40px] text-[#4285F3] font-poorrichard text-center md:text-left">
//                     LOGO
//                   </h1>
//                 </div>
    
//                 <div className="mt-[12px] mb-[36px]">
//                   <p className="font-semibold text-3xl md:text-left text-center mx-[20px] text-[#1A2531]">
//                     Sign In <span>To Your Account</span>
//                   </p>
    
//                   <p className="text-[14px] md:text-[16px] md:text-left text-[#D1D1D1] md:leading-[28px] mt-4 block md:hidden text-left mx-[25px]">
//                     Welcome Back! By click the sign up button, you agree to Zenitood Terms and Service and acknowledge the{' '}
//                     <span className="cursor-pointer underline text-[#4285F3]">Privacy and Policy</span>
//                   </p>
//                 </div>
    
//                 <div className="mx-[45px] rounded-2xl opacity-70 bg-[#152A16] flex justify-center items-center p-4 lg:w-[341px] text-[20px] lg:hidden leading-[35px] h-[143px]">
//                   <p className="text-opacity-100 text-center">
//                     <span className="text-[#358eee] cursor-pointer" onClick={handleCreateAccountClick}>
//                       Create Account
//                     </span>
//                     <br />
//                     <span className="text-[#FFFFFF]">Fill in Your Information</span>
//                   </p>
//                 </div>
//               </div>
            
//             </div>
          

//             {/* <div className='md:mx-12 lg:mx-32 md:my-16 font-Poppins'> */}
  
//   {/* <div className='flex justify-between items-center'> */}

//     {/* first part */}

// <StartSignUp isCreatingAccount={isCreatingAccount} handlesignup={handlesignup}></StartSignUp>

// {/* ekhane hobe */}
  



//     {/* Second Part only desktop part */}

//     {/* <div className='w-3/5 relative rounded-lg hidden md:block' >
  

//     <div className='bg-cover w-full  h-screen rounded-2xl flex items-center justify-center ' style={{backgroundImage:`url(${logsignbg})`}}>
//     <div className=' rounded-2xl  opacity-70 bg-[#152A16] flex justify-center items-center p-4 mx-3 lg:w-[341px] text-sm md:text-xl lg:text-[22px] leading-[35px] h-[143px]'>
//         <p className='text-opacity-100 text-center'><span className='text-[#358eee]'>Create Account</span >  <br /><span className='text-[#FFFFFF]'>
//         Fill in Your Information</span></p>
//     </div>
//     <div className='flex gap-2 absolute bottom-10'>
//     <div className='w-[10px] h-[10px] bg-[#156BCA]   rounded-full'></div>
//     <div className='w-[10px] h-[10px] bg-[#3B463373] rounded-full'></div>
//     <div className='w-[10px] h-[10px] bg-[#3B463373] rounded-full'></div>
//     </div>
//     </div>
//     </div> */}
//   {/* </div> */}
// {/* </div> */}
//            </div>
//           ):(


//     //         <div className="relative">
//     //         <div>
//     //             <img className='block min-h-fit md:hidden w-full' src={iphonebg} alt="" />
    
    
    
//     //              <div className='md:mx-12 lg:mx-32 md:my-16 font-Poppins'>
      
//     //       <div className='flex justify-between items-center'>
    
//     //         {/* first part */}
    

//     // {/* ekhane hobe */}

   
    
          
//     //       </div>
//     //     </div>
    
    
    
    
    
    
//     //         </div>
//     //     </div>
//     <StartSignUp isCreatingAccount={isCreatingAccount}  handlesignup={handlesignup}></StartSignUp>

//             // <StartSignUp></StartSignUp>
         
//           )
//         }
//    </div>
//   )
// }

// export default SignUp
