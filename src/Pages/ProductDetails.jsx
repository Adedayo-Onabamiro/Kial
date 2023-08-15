import React, { useState, useEffect,useContext ,useRef } from 'react';
import { ProductContext } from '../ProductContext';
import { fetchProducts } from '../ApiCall';
import { StoreItemCard } from '../Components/General/StoreItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { SelectedProductContext } from '../ProductContext';

export const ProductDetails = () => {

  return (
    <div className='h-auto my-10 w-full flex items-center justify-center'>
        <div className='w-10/12 h-auto'>
            <span className='flex flex-row w-full h-fit'> <p>Account / Gaming / PlayStation Controller</p> </span>
            <LayoutExample></LayoutExample>
            <RelatedItem></RelatedItem>
        </div>
    </div>
  )
}

export const RelatedItem = () => {
  // Slice the first 4 items from the array
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts(); // Use the fetchProducts function
      setProducts(data);
    }

    fetchData();
  }, []);
  const productsFromContext = useContext(ProductContext); // Use the context

  // Generate a random starting index
  const randomStartingIndex = Math.floor(Math.random() * (productsFromContext.length - 4 + 1));

  return (
    <div className='h-auto w-full my-10 items-center justify-center hidden md:flex flex-col'>
        <div className='w-full h-11 flex flex-row items-center'>
          <div className='h-full w-6 bg-red-600 rounded-lg'></div>
          <p className='text-red-600 text-lg font-semibold mx-3'> Related Item </p>
        </div>
        <div className='my-8 md:flex'>
            {productsFromContext.slice(randomStartingIndex, randomStartingIndex + 4).map((products) => (
            <div key={products.id} className="w-72 m-4 flex-shrink-0">
              <StoreItemCard {...products}  />
            </div>
          ))}
        </div>
    </div>
  );
};


export const LayoutExample = () => {
  const { selectedProduct } = useContext(SelectedProductContext);
  const [count, setCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);


  if (!selectedProduct) {
    return <div>No product selected.</div>;
  }

  const maxRating = 5; // Maximum possible rating value
  const rating = Math.floor(Math.random() * 4 + 1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="container flex md:flex-row flex-col items-center justify-between mx-auto p-4">
      <div className="mb-4 w-full md:w-5/12 m-4">
        <div className="bg-gray-200 h-96 flex items-center justify-center">
          <img src={selectedProduct.image} alt="Large Image" className="w-9/12 h-3/4 object-contain" />
        </div>
      </div>

      <div className="mb-4 w-full md:w-5/12 m-4">
        <div className="min-h-96 flex flex-col items-start justify-center p-4">
          <p className='font-bold text-xl my-2'>{selectedProduct.title}</p> 
          <div className="flex items-start my-2 flex-col">
            {/* Rating stars */}
            <div className="flex items-center">
              {[...Array(maxRating)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar}
                  className={`h-5 w-5 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              <p className="ml-2">450</p>
            </div>
            <p className='text-xl my-2'>{selectedProduct.price}</p>
            <p className='my-2'> {selectedProduct.description} </p>
            
            {/* Count and buy buttons */}
            <div className="my-2 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="border border-black rounded my-2">
                <button onClick={decrement}> <span role="img" aria-label="Minus" className="border-r border-gray-500 px-3">➖</span> </button>
                <span className="px-3 mx-2"> {count} </span>
                <button onClick={increment}> <span role="img" aria-label="Plus" className="border-l border-gray-500 px-3">➕</span> </button>
              </div>
              <div> <button className="bg-red-500 rounded text-white p-2 px-8 my-2">Buy Now</button> </div>
              <div className="border border-black rounded my-2"> 
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`h-6 w-6 p-1 my-1 cursor-pointer ${
                      isFavorite ? 'text-red-500' : 'text-gray-300'
                    }`}
                    onClick={handleFavoriteClick}
                  />
                </div>
              </div>
            </div>

            {/* Delivery info */}
            <div className='w-full flex flex-row items-center justify-start py-4 my-4 border border-black'>
              <div className='flex items-center justify-center w-fit md:mr-4'> 
                <img src='./img/icon-delivery (1).png' className='h-9 w-9' alt="Delivery Icon" /> 
              </div>
              <span className='flex flex-col'> 
                <p className='font-bold'> Free Delivery </p> 
                <p className='underline text-sm'> Enter your postal code for Delivery Availability </p>  
              </span>
            </div>
            {/* Return info */}
            <div className='w-full flex flex-row items-center justify-start py-4 my-4 border border-black'>
              <div className=' flex items-center justify-center w-fit md:mr-4'> 
                <img src='./img/Icon-return.png' className='h-9 w-9' alt="Return Icon" /> 
              </div>
              <span className='flex flex-col'> 
                <p className='font-bold'> Return Delivery </p> 
                <p className='underline text-sm'> Enter your postal code for Delivery Availability </p>  
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// this code is for the other small parts where different views of the images were to show
{/* <div className="flex flex-nowrap w-full md:flex-wrap mb-4 flex-row md:flex-col md:w-1/6">
<div className="w-full p-2">
  <div className="bg-gray-200 h-36 flex items-center justify-center">
    <img src="./img/image 57.png" alt="Image 1" className="w-9/12 h-3/4 object-contain" />
  </div>
</div>
<div className="w-full p-2">
  <div className="bg-gray-200 h-36 flex items-center justify-center">
    <img src="./img/image 58.png" alt="Image 2" className="w-9/12 h-3/4 object-contain" />
  </div>
</div>
<div className="w-full p-2">
  <div className="bg-gray-200 h-36 flex items-center justify-center">
    <img src="./img/image 59.png" alt="Image 3" className="w-9/12 h-3/4  object-contain" />
  </div>
</div>
<div className="w-full p-2">
  <div className="bg-gray-200 h-36 flex items-center justify-center">
    <img src="./img/image 61.png" alt="Image 4" className="w-9/12 h-3/4  object-contain" />
  </div>
</div>
</div> */}
