import { faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Title } from '../Components/General/Title'

export const Contact = () => {
  return (
    <>
        <Title link="Home / Contact" />
        <div className='md:h-full my-10 h-auto w-full flex flex-col md:flex-row items-center justify-center'>
            <div className='w-10/12 h-full flex flex-col md:flex-row items-center justify-between'>
                {/* left side */}
                <div className='w-1/3 m-4 flex flex-col items-center justify-center'>
                    <div className='h-full w-full bg-white shadow-2xl shadow-inner flex flex-col justify-between p-[5%]'>
                        {/* up */}
                        <div className=' border-b border-black h-[48%] w-full p-5 flex flex-col items-start justify-center'>
                            <span className=' mb-2 w-auto flex flex-row items-center font-semibold'> <FontAwesomeIcon className='bg-red-500 p-2 rounded-full h-6 w-6 mr-4 text-white' icon={faPhone} /> Call To Us </span>
                            <p className='mb-2'>We are available 24/7, 7 days a week</p>
                            <p className='mb-2'>Phone: +8801344442323</p>
                        </div>
                        {/* down */}
                        <div className='h-[48%] w-full p-5 flex flex-col items-start justify-center'>
                            <span className='mb-2 w-auto flex flex-row items-center font-semibold'> <FontAwesomeIcon className='bg-red-500 p-2 rounded-full h-6 w-6 mr-4 text-white' icon={faEnvelope} /> Write To Us </span>
                            <p className='mb-2'>Fill out our form and we will contact you within 24 hours.</p>
                            <p className='mb-2'>Emails: customer@exclusive.com</p>
                            <p className='mb-2'>Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='w-2/3 m-4 flex flex-col justify-center'>
                    <div className='h-full w-full bg-white shadow-2xl shadow-inner flex flex-col justify-between p-[5%]'>
                    <div className="flex flex-col h-full items-center justify-between">
                        {/* First Part */}
                        <div className="flex justify-between w-full space-x-4 mb-4">
                            <input type="text" placeholder="Name" className="flex-grow bg-gray-200 px-2 py-2" />
                            <input type="email" placeholder="Email" className="flex-grow bg-gray-200 px-2 py-2" />
                            <input type="tel" placeholder="Phone" className="flex-grow bg-gray-200 px-2 py-2" />
                        </div>

                        {/* Second Part */}
                        <div className="w-full h-48 mb-6">
                            <input type="text" placeholder="Message" className="w-full h-full bg-gray-200 px-4 py-3" />
                        </div>

                        {/* Third Part */}
                        <button className="bg-red-500 text-white py-2 px-4 rounded-md self-end">Send Message</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
