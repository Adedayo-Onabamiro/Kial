import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SignUp = () => {
  return (
    <>
        <div className='md:h-96 my-28 h-auto w-full flex flex-col md:flex-row items-center justify-between'>
            <div className='w-11/12  md:w-[48%] h-full bg-[#CBE4E8] flex items-center justify-center'> <img className='md:h-64 h-12 w-auto object-contain' src='./img/trolley.png' /> </div>
            <div className='w-11/12  md:w-[48%] h-full'>
            <div class="flex flex-col md:items-start items-center justify-center h-auto">
                <h1 class="md:text-4xl text-xl text-center font-bold mb-2">Create an Account</h1>
                <p class="text-sm text-gray-600 mb-4 text-center">Enter your details below</p>
                
                <div class="md:w-10/12 w-full mb-4">
                    <input type="text" placeholder="Name" class="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
                </div>
                
                <div class="md:w-10/12 w-full mb-4">
                    <input type="email" placeholder="Email" class="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
                </div>
                
                <div class="md:w-10/12 w-full mb-4">
                    <input type="password" placeholder="Password" class="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
                </div>
                
                <button class="md:w-10/12 w-full bg-red-500 text-white py-2 rounded-md mb-2">Create Account</button>
                
                <button class="md:w-10/12 w-full border border-black text-black py-2 rounded-md flex items-center justify-center"> <FontAwesomeIcon className='mr-2 text-blue-600' icon={faGoogle} /> Sign in with Google </button>
                
                <p class="text-sm"> Already have an account? <a href="#" class="underline">Login</a> </p>
            </div>

             </div>
        </div>
    </>
  )
}
