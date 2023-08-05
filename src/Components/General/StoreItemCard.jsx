import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';


export const StoreItemCard = ({ imgSrc, title, originalPrice, discountedPrice, stars, reviewCount }) => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
    };
  
    return (
      <div className="w-full bg-gray-100 relative ">
        <div className="overflow-hidden flex items-center justify-center">
          <img src={imgSrc} alt="Item" className="h-52 w-full py-10 object-contain" />
          <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-lg"> -35% </div>
        </div>
        <div className="mt-4 bg-white">
          <p className="text-black font-semibold">{title}</p>
          <div className="flex items-center mt-2">
            <p className="text-gray-500 line-through mr-2">${originalPrice}</p>
            <p className="text-red-500 font-semibold">${discountedPrice}</p>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={`h-5 w-5 ${
                    index < stars ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="ml-2">({reviewCount})</p>
          </div>
        </div>
  
        {/* Positioned at the top right */}
        <div className="absolute top-0 right-2 flex flex-col">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faHeart}
              className={`h-6 w-6 bg-white rounded-full p-1 my-1 cursor-pointer ${
                isFavorite ? 'text-red-500' : 'text-gray-300'
              }`}
              onClick={handleFavoriteClick}
            />
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEye} className="h-6 w-6 bg-white rounded-full p-1 my-1 text-gray-400" />
          </div>
        </div>
      </div>
    );
  };
  