import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { SelectedProductContext } from '../../ProductContext';
import { CartContext, FavoriteContext } from '../../ProductContext';
import { Link } from 'react-router-dom';

export const StoreItemCard = ({ image, title, price, description, id, rating = {} }) => {
  const { count, rate } = rating;

    const { setSelectedProduct } = useContext(SelectedProductContext);
    const { addToCart } = useContext(CartContext); // Added
    const discountedPrice = (price * (100 - 7)) / 100;
    const maxRating = 5; // Maximum possible rating value
    // const rating = Math.floor(Math.random() * 4 +1)
  
    const { addToFavorite, favoriteItems, removeFromFavorite } = useContext(FavoriteContext);
  
    const isFavorite = favoriteItems.some((item) => item.id === id);
  
    const handleFavoriteClick = () => {
      if (isFavorite) {
        removeFromFavorite(id);
      } else {
        addToFavorite({ id, image, title, price, description, rating, count});
      }
    };
    const handleEyeClick = () => {
      setSelectedProduct({ image, title, price, description, rating, isFavorite, count });
    };

    const handleAddToCartClick = () => {
      addToCart({ id, image, title, price, quantity: 1 }); // Add the product to cart
      
    };
  
    return (
      <div className="w-86 h-[350px] flex flex-col justify-between bg-white relative border-2 border-gray-200">
        <div className="group overflow-hidden flex items-center justify-center">
          <img src={image} alt="Item" className="h-52 w-full py-10 object-contain" />
            {/* Hidden "Add to Cart" button */}
            <button onClick={handleAddToCartClick} className="absolute left-0 w-full h-12 bg-black text-white transition duration-300 transform translate-y-1/2 opacity-0 group-hover:opacity-100 "> Add to Cart </button>
          <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-lg"> -35% </div>
        </div>
        <div className="mt-4 h-44 border px-2">
          <p className="text-black font-semibold">{title}</p>
          <div className="flex items-center mt-2">
            <p className="text-gray-500 line-through mr-2">${price}</p>
            <p className="text-red-500 font-semibold">${discountedPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(maxRating)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={`h-5 w-5 ${
                    index < rate ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="ml-2">({count})</p>
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
            <Link to="/ProductDetails"> <FontAwesomeIcon onClick={handleEyeClick} icon={faEye} className="h-6 w-6 bg-white rounded-full p-1 my-1 text-gray-400" /> </Link>
          </div>
        </div>
      </div>
    );
  };
  