import React, { useState } from 'react'
import Lottie from "lottie-react";
import signup from '../../../public/device.json'
import { RiEyeCloseLine } from 'react-icons/ri';
import { BsEye } from 'react-icons/bs';
import './Login.css'
import { Link } from 'react-router-dom';
import { Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginComponents = () => {
  // variables
  const [emaildefault, emailchanger]=useState('')
  const [emailError, emailchangerError]=useState('')
  const [Passworddefault,Passwordchanger]=useState('')
  const [PasswordError,PasswordchangerError]=useState('')
  const [deafault, change]= useState(false)

//  Functions
const emailMangaer= (e)=>{
  emailchanger(e.target.value)
  emailchangerError('')
}
const PasswordManager= (e)=>{
  Passwordchanger(e.target.value)
  PasswordchangerError('')
}
  const show = ()=>{
     change(!deafault)
 }
   //firebase functions
   const auth = getAuth();

//submit function
const finalSubmit=(e)=>{
  e.preventDefault()
  if(!emaildefault){
    emailchangerError('Enter your email!')
  }if(!Passworddefault){
    PasswordchangerError('Enter your password!')
  }else{
    signInWithEmailAndPassword(auth, emaildefault, Passworddefault)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    
  });
    // toast.success('Login successful!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   transition: Slide,
    //   });
  }
}
  return (
    <>
    <div className="maindivtwo">
      <div className="w-full max-w-[346px] md:max-w-[1114px] h-auto md:h-[616px]  rounded-[40px] maindiv md:p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <form onSubmit={finalSubmit} className="w-full md:w-1/2 flex flex-col p-[17px]">
            <div className="flex flex-col justify-center items-center mb-4">
              <h3 className='font-semibold text-2xl md:text-[40px] text-[#000000] text-center'>Welcome Back</h3>
              <p className='font-normal text-lg md:text-2xl text-[#3b90ff] mb-4 md:mb-8'>We’re so excited to see you again!</p>
            </div>
            <p className='font-normal text-sm md:text-[16px] text-[#70aeff] mb-[7px]'>Email</p>
            <input onChange={emailMangaer} className='h-12 md:h-[56px] w-full border-[#368dff] border-b-[#4aedff] border-l-[#4aedff] border-[5px] outline-none rounded-xl pl-5' type="email" />
            <p className='text-xs font-semibold text-[#ff0000]'>{emailError}</p>
            <p className='font-normal text-sm md:text-[16px] text-[#70aeff] mb-[7px] mt-[24px]'>Password</p>
            <div className="relative w-full">
              {
                deafault ?
                  <RiEyeCloseLine onClick={show} className='absolute top-1/2 transform -translate-y-1/2 right-4 text-[#0004ff] text-2xl cursor-pointer' />
                  :
                  <BsEye onClick={show} className='absolute top-1/2 transform -translate-y-1/2 right-4 text-[#0004ff] text-2xl cursor-pointer' />
              }
              <input onChange={PasswordManager} className='h-12 md:h-[56px] w-full border-[#3686ff] border-b-[#20c9dc] border-r-[#20c9dc] border-[4px] outline-none rounded-xl pl-5' type={deafault ? 'text' : "password"} />
              <p className='text-xs font-semibold text-[#ff0000]'>{PasswordError}</p>
            </div>
            <Link to='/resetpass'><p className='font-medium text-xs md:text-[14px] text-[#1d38a0] mt-[5px] flex justify-end'>Forgot your password?</p></Link>
            <div className="flex flex-col justify-center items-center">
              <button type='submit' className='w-full h-12 md:h-[64px] bg-gradient-to-r from-[#00ebff] to-[#0004ff] duration-75 rounded-[32px] text-lg md:text-[25px] mt-[42px] font-medium text-white active:scale-[1.1]'>Log in</button>
              <p className='font-normal text-sm md:text-[16px] text-[#1f5ba9] mt-[50px] items-center'>Don't have an account? <span className='font-medium text-[#0004ff] hover:font-bold '><Link to='/register'>Sign up</Link></span></p>
            </div>
          </form>
          <div className='hidden md:flex w-full md:w-1/2 flex-col justify-center items-center'>
            <Lottie className='w-full md:w-[500px] h-[300px] md:h-[500px]' animationData={signup} />
            <h3 className='font-bold text-2xl md:text-[40px] text-[#000000]'>Log in to your account</h3>
            <p className='font-normal text-lg md:text-xl text-[#246fd1] mt-2 mb-8'>To watch your chats, please log in.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginComponents