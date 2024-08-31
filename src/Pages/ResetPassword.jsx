import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => {
  const [email, SetEmail]=useState('')
  const auth = getAuth();

  const resetPassMail = (e)=>{
  SetEmail(e.target.value)
  }

  const finalSubmit = (e)=>{
    e.preventDefault()
    if(!email){
      alert('Please enter your email.')
    }else{
      alert('Email verification code sent.')
      sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  }


  return (
  <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-700">
      <div className="w-[650px] p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Reset Your Password
          </h1>
          <p className="mt-2 text-gray-600">
            Enter your email address and we’ll send you a link to reset your password.
          </p>
        </div>
        <form onSubmit={finalSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="mt-4 block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input

              id="email"
              name="email"
              type="email"
              onChange={resetPassMail}
              className="mt-3 p-3 w-full border-double border-[2px] border-purple-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          
            <button
              type="submit"
              className="w-full py-3 px-4 font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Reset Link
            </button>
          
        </form>
            <Link to='/login' className='flex justify-start items-center w-40 mt-3 font-semibold text-lg hover:underline '>Go Back to Login</Link>
      </div>
    </div>
  </>
  )
}

export default ResetPassword