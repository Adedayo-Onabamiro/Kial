import React from 'react'

export const ProductDetails = () => {
  return (
    <div className='h-auto my-10 w-full bg-black border border-red-500 flex items-center justify-center'>
        <div className='w-10/12 h-96  border border-white '>
            <span className='flex flex-row w-full h-fit border border-red-400'> <p className='text-red-400'>Account / Gaming / PlayStation Controller</p> </span>
            <LayoutExample></LayoutExample>
        </div>
    </div>
  )
}

export const LayoutExample = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/4 p-2">
          <div className="bg-gray-200 h-40">
            <img src="image1.jpg" alt="Image 1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/4 p-2">
          <div className="bg-gray-200 h-40">
            <img src="image2.jpg" alt="Image 2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/4 p-2">
          <div className="bg-gray-200 h-40">
            <img src="image3.jpg" alt="Image 3" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/4 p-2">
          <div className="bg-gray-200 h-40">
            <img src="image4.jpg" alt="Image 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-gray-200 h-60">
          <img src="large-image.jpg" alt="Large Image" className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <div className="text-gray-700 text-lg">
          <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Nullam id urna vel nunc rhoncus lacinia. Fusce ac elit lacinia, gravida velit et, facilisis tortor.</p>
        </div>
      </div>
    </div>
  );
}

