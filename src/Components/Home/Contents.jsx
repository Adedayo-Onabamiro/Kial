import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';

export const Contents = () => {
  const targetDate = '2023-12-31T00:00:00'; // Set your target date here

  return (
    <div className='border border-black h-96 w-10/12 my-10 flex flex-col'>
        <div className='w-full h-11 flex flex-row items-center'> <div className='h-full w-6 bg-red-600 rounded-lg'></div> <p className='text-red-600 text-lg font-semibold mx-3'>Today's</p> </div>
        <div className='md:w-1/2 bg-red-300 h-auto flex flex-row items-center justify-between'> <h1 className='text-3xl font-bold'>Flash Sales</h1> <CountdownTimer targetDate={targetDate} /> </div>
        <div><StoreItemCard></StoreItemCard> </div>
        <div className='w-full h-auto flex items-center justify-center'> <button className='bg-red-600 px-4 py-2 text-white'>View All Products</button> </div>
    </div>
  )
}



export const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-fit h-auto border border-black flex flex-row justify-evenly">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center p-4">
          <p className="text-sm  text-gray-500 uppercase">{unit}</p>
          <p className="text-4xl font-bold">{value.toString().padStart(2, '0')}</p>
        </div>
      ))}
    </div>
  );
};



export const StoreItemCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-80 p-4 border rounded-lg shadow-md">
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <img src="item-image.jpg" alt="Item" className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-crimson text-white px-2 py-1 rounded-full"> -35% </div>
      </div>
      <div className="mt-4">
        <p className="text-black font-semibold">Item Name</p>
        <div className="flex items-center mt-2">
          <p className="text-gray-500 line-through mr-2">$50</p>
          <p className="text-red-500 font-semibold">$32</p>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`h-5 w-5 ${
                  index < 4 ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="ml-2">({Math.floor(Math.random() * 100)})</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faHeart}
            className={`h-6 w-6 cursor-pointer ${
              isFavorite ? 'text-red-500' : 'text-gray-300'
            }`}
            onClick={handleFavoriteClick}
          />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEye} className="h-6 w-6 text-gray-400" />
          <p className="ml-2">100</p>
        </div>
      </div>
    </div>
  );
};
