
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className='md:h-96 my-28 h-auto w-full flex flex-col md:flex-row items-center justify-between'>
        <div className='w-11/12  md:w-[48%] h-full bg-[#CBE4E8] flex items-center justify-center'>
          <img className='md:h-64 h-12 w-auto object-contain' src='./img/trolley.png' />
        </div>
        <div className='w-11/12  md:w-[48%] h-full'>
          {showLogin ? (
            <div className="flex h-full flex-col md:items-start items-center justify-between">
              <h1 className="md:text-4xl text-xl text-center font-bold mb-4">Log in to Exclusive</h1>
              <p className="text-sm text-gray-600 mb-4 text-center">Enter your details below</p>
              <div className="md:w-10/12 w-full mb-4">
                <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
              </div>
              <div className="md:w-10/12 w-full mb-4">
                <input type="password" placeholder="Password" className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
              </div>
              <div className='flex md:w-10/12 w-full md:flex-row flex-col justify-between items-center'>
              <Link to= "/Account" className='w-full'> <button className="md:w-4/12 w-full bg-red-500 text-white py-2 rounded-md mb-2">Login</button> </Link>
                <p className="text-sm text-red-500">
                  <a href="#" className="underline">Forgot Password?</a>
                </p>
              </div>
              <p className="text-sm">
                Don't have an account? <a href="#" className="underline" onClick={() => setShowLogin(false)}>Sign Up</a>
              </p>
            </div>
          ) : (
            <div className="flex flex-col md:items-start items-center justify-between h-auto">
              <h1 className="md:text-4xl text-xl text-center font-bold mb-2">Create an Account</h1>
              <p className="text-sm text-gray-600 mb-4 text-center">Enter your details below</p>
              <div className="md:w-10/12 w-full mb-4">
                <input type="text" placeholder="Name" className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
              </div>
              <div className="md:w-10/12 w-full mb-4">
                <input type="email" placeholder="Email" className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
              </div>
              <div className="md:w-10/12 w-full mb-4">
                <input type="password" placeholder="Password" className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
              </div>
              <button className="md:w-10/12 w-full bg-red-500 text-white py-2 rounded-md mb-2">Create Account</button>
              <button className="md:w-10/12 w-full border border-black text-black py-2 rounded-md flex items-center justify-center">
                <FontAwesomeIcon className='mr-2 text-blue-600' icon={faGoogle} /> Sign in with Google
              </button>
              <p className="text-sm">
                Already have an account? <a href="#" className="underline" onClick={() => setShowLogin(true)}>Login</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
