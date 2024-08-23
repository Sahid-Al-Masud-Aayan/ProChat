import React, { useState } from 'react'
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom'
import signUp from '../../../public/SignUp.json'
import Lottie from 'lottie-react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Bounce, ToastContainer, Zoom, toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'
import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BeatLoader } from 'react-spinners';

const SignUpComponents = () => {
//variables
  const [email, emailchanger]=useState('')
  const [emailError, emailchangerError]=useState('')
  const [name, namechanger]=useState('')
  const [nameError, namechangerError]=useState('')
  const [password, Passwordchanger]=useState('')
  const [passwordError, PasswordchangerError]=useState('')
  const [password2, Password2changer]=useState('')
  const [password2Error, Password2changerError]=useState('')
  const [visible, hidden]= useState(false)
  const [visibleconfirm, hiddenconfirm]= useState(false)
  const [Loader, SetLoader]= useState(false)
  const navigator= useNavigate()
  //firebase functions
  const auth = getAuth();
//functions
const showconfirm = ()=>{
  hiddenconfirm(!visibleconfirm)
}
const NameMangaer = (e)=>{
  namechanger(e.target.value)
  namechangerError('')
}
const emailMangaer = (e)=>{
  emailchanger(e.target.value)
  emailchangerError('')
}
const passwordMangaer = (e)=>{
  Passwordchanger(e.target.value)
  PasswordchangerError('')
}
const passwordMangaer2 = (e)=>{
  Password2changer(e.target.value)
  PasswordchangerError('')
  Password2changerError('')
}
const show = ()=>{
  hidden(!visible)
}
//submit function
const finalSubmit = (e)=>{
  e.preventDefault()

  if(!name){
    namechangerError('Enter your name!')
  }if(!email){
    emailchangerError('Enter your email!')
  }if(!password){
    PasswordchangerError('Enter your password!')
  }if(!password2){
      Password2changerError('Enter your password!')
  }if(password != password2){
      Password2changerError('Password does not match!')
  }else{
      SetLoader(true)


      // firebase function
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
           photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
        })
        SetLoader(false)
        toast.info('Email verification code sent.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
          navigator('/')
          sendEmailVerification(auth.currentUser)
          console.log(userCredential);
          
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);

        SetLoader(false)
        if(errorCode == 'auth/email-already-in-use'){
          toast.error('Email already in use!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }if(errorCode == 'auth/weak-password'){
          toast.error('Password is very weak!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
        // ..
      });
  }
}

  return (
    <>
          <div className="maindivtwo">
      <div className="forcolor w-full max-w-[346px] md:max-w-[1114px] h-auto md:h-auto  rounded-[15px] md:p-3">
        <div className="flex flex-col md:flex-row justify-between">
          <form onSubmit={finalSubmit} className="w-full md:w-1/2 flex flex-col p-[17px]">
            <div className="flex flex-col justify-center items-center mb-4">
              <h3 className='font-semibold text-2xl mt-3 md:text-[40px] text-[#ffffff] text-center mb-3'>Welcome to ProChat</h3>
              <p className='font-normal text-lg md:text-xl text-[#f8ff33] mb-4 md:mb-8'>The best chatting platform with the greatest features</p>
            </div>
            <p className='font-normal text-sm md:text-[16px] text-[#f8ff33] mb-[7px]'>Username</p>
            <input onChange={NameMangaer} className=' h-12 md:h-lsepx] w-full border-[#44d420] border-b-[#f0ff19] border-l-[#f0ff19] border-[4px] outline-none rounded-xl pl-5' type="text" />
            <p className='text-xs font-semibold text-[#ff0000]'>{nameError}</p>
            <p className='font-normal text-sm md:text-[16px] text-[#f8ff33] mt-2  mb-[7px]'>Email</p>
            <input onChange={emailMangaer} className=' h-12 md:h-lsepx] w-full border-[#f0ff19] border-b-[#44d420] border-l-[#44d420] border-[4px] outline-none rounded-xl pl-5' type="email" />
            <p className='text-xs font-semibold text-[#ff0000]'>{emailError}</p>
            <p className='font-normal text-sm md:text-[16px] text-[#f8ff33]  mt-2 mb-[7px]'>Password</p>

            <div className="relative w-full">
              {
                visible?
                <IoEyeOff onClick={show} className='absolute top-[50%] transform -translate-y-1/2 right-4 text-[#1fd200] text-2xl cursor-pointer' />
                :
                <IoEye onClick={show} className='absolute top-[50%] transform -translate-y-1/2 right-4 text-[#1fd200] text-2xl cursor-pointer' />

              }             
               
            <input onChange={passwordMangaer} className=' h-12 md:h-lsepx] w-full border-[#44d420] border-b-[#f0ff19] border-l-[#f0ff19] border-[4px] outline-none rounded-xl pl-5' type={visible? 'text':'password'} />
            </div>
            <p className='text-xs font-semibold text-[#ff0000]'>{passwordError}</p>
            <p className='font-normal text-sm md:text-[16px] text-[#f8ff33] mt-2  mb-[7px]'>Confirm Password</p>
            <div className="relative w-full">             
               {
                visibleconfirm?
                 <VscEyeClosed onClick={showconfirm} className='absolute top-[50%] transform -translate-y-1/2 right-4 text-[#1fd200] text-2xl cursor-pointer' />
                 :
                 <VscEye onClick={showconfirm} className='absolute top-[50%] transform -translate-y-1/2 right-4 text-[#1fd200] text-2xl cursor-pointer' />
               }
              
              <input onChange={passwordMangaer2} className=' h-12 md:h-[46px] w-full border-[#f0ff19] border-b-[#44d420] border-l-[#44d420] border-[4px] outline-none rounded-xl pl-5' type={visibleconfirm? 'text':'password'} />
            </div>
              <p className='text-xs font-semibold text-[#ff0000]'>{password2Error}</p>
            <div className="flex flex-col justify-center items-center">
              {
                Loader?
              <div className="w-full h-12 flex justify-center items-center md:h-[64px] bg-gradient-to-r from-[#fff23b] to-[#15ff00] duration-75 rounded-[32px] text-lg md:text-[25px] mt-[42px] font-medium text-white">
           < BeatLoader color='#fff'/>
              </div>
              :
              <button type='submit' className='w-full h-12 md:h-[64px] bg-gradient-to-r from-[#fff700] to-[#04ff00] duration-75 rounded-[32px] text-lg md:text-[25px] mt-[42px] font-medium text-white active:scale-[1.1]'>Sign Up</button>
              }
              <p className='font-normal text-sm md:text-[16px] text-[#f7ff18] mt-[30px] items-center'>Already have an account? <span className='font-medium text-[#4ab922] hover:font-bold '><Link to='/'>Login</Link></span></p>
            </div>
          </form>
          <div className='hidden md:flex w-full md:w-1/2 flex-col justify-center items-center'>
          <Lottie animationData={signUp}/>
            <h3 className='font-bold text-2xl md:text-[40px] text-[#ffffff]'>Create an account</h3>
            <p className='font-normal text-lg md:text-xl text-[#fffb2d] mt-2 mb-8'>Connect to people all over the world!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUpComponents
