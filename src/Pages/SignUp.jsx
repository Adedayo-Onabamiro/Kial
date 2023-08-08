import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SignUp = () => {
  return (
    <>
        <div className='h-96 w-full border-4 border-red-500 flex flex-col md:flex-row items-center justify-between'>
            <div className='w-[48%] h-full border-4 border-black bg-[#CBE4E8] flex items-center justify-center'> <img className='h-64 w-auto object-contain' src='./img/trolley.png' /> </div>
            <div className='w-[48%] h-full border-4 border-black'>
            <div class="flex flex-col items-center justify-center h-auto">
                <h1 class="text-4xl font-bold mb-2">Create an Account</h1>
                <p class="text-sm text-gray-600 mb-4">Enter your details below</p>
                
                <div class="w-full mb-4">
                    <input type="text" placeholder="Name" class="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
                </div>
                
                <div class="w-full mb-4">
                    <input type="email" placeholder="Email" class="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
                </div>
                
                <div class="w-full mb-4">
                    <input type="password" placeholder="Password" class="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1" />
                </div>
                
                <button class="w-full bg-red-500 text-white py-2 rounded-md mb-2">Create Account</button>
                
                <button class="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center"> <FontAwesomeIcon className='mr-2' icon={faGoogle} /> Sign in with Google </button>
                
                <p class="text-sm"> Already have an account? <a href="#" class="underline">Login</a> </p>
            </div>

             </div>
        </div>
    </>
  )
}
