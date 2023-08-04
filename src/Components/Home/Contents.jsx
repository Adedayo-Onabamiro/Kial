import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';

export const Contents = () => {
  const items = [
    {
      imgSrc: './img/p1.png',
      title: 'Body Louvre',
      originalPrice: 50,
      discountedPrice: 32,
      stars: 4,
      reviewCount: 80,
    },
    {
      imgSrc: './img/p2.png',
      title: 'KeyBoard',
      originalPrice: 80,
      discountedPrice: 622,
      stars: 5,
      reviewCount: 20,
    },
    {
      imgSrc: './img/p3.png',
      title: 'Mia Gony',
      originalPrice: 50,
      discountedPrice: 32,
      stars: 4,
      reviewCount: 80,
    },
    {
      imgSrc: './img/p4.png',
      title: 'SuriMola',
      originalPrice: 230,
      discountedPrice: 128,
      stars: 3,
      reviewCount: 60,
    },
    {
      imgSrc: './img/p1.png',
      title: 'Body Louvre',
      originalPrice: 50,
      discountedPrice: 32,
      stars: 4,
      reviewCount: 80,
    },
    {
      imgSrc: './img/p4.png',
      title: 'SuriMola',
      originalPrice: 230,
      discountedPrice: 128,
      stars: 3,
      reviewCount: 60,
    },
    {
      imgSrc: './img/p1.png',
      title: 'Body Louvre',
      originalPrice: 50,
      discountedPrice: 32,
      stars: 4,
      reviewCount: 80,
    },
    
  ];
  
  return (
    <div className='border-8 border-red-500 h-auto w-10/12 my-10 flex flex-col'>
      <Todays items={items}></Todays>
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
    <div className="w-fit h-auto flex flex-row justify-evenly">
      {Object.entries(timeLeft).map(([unit, value], index, arr) => (
        <div key={unit} className="text-center py-4 px-1">
          <p className="text-sm text-gray-500 uppercase">{unit}</p>
          <p className="text-4xl font-bold">
            {value.toString().padStart(2, '0')}
            {index !== arr.length - 1 && <span className="px-1">:</span>}
          </p>
        </div>
      ))}
    </div>
  );
};


export const Todays =({items}) => {
  const targetDate = '2023-12-31T00:00:00'; // Set your target date here

  return (
    <div className='border border-black h-auto w-full my-10 flex flex-col'>
        <div className='w-full h-11 mx-10  flex flex-row items-center'> <div className='h-full w-6 bg-red-600 rounded-lg'></div> <p className='text-red-600 text-lg font-semibold mx-3'>Today's</p> </div>
        <div className='md:w-1/2 h-auto mx-10 flex flex-row items-center justify-between'> <h1 className='text-3xl font-bold'>Flash Sales</h1> <CountdownTimer targetDate={targetDate} /> </div>
        <div className='my-8 mx-2 overflow-hidden'> <LRSlider items={items} visibleItems={3}/> </div>
        <div className='w-full h-auto flex items-center justify-center'> <button className='bg-red-600 px-4 py-2 text-white'>View All Products</button> </div>
    </div>
  )
}


export const StoreItemCard = ({ imgSrc, title, originalPrice, discountedPrice, stars, reviewCount }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-80 bg-gray-100 relative">
      <div className="overflow-hidden flex items-center justify-center">
        <img src={imgSrc} alt="Item" className="h-52 w-full py-6 object-contain" />
        <div className="absolute top-2 left-2 bg-red-600 text-black px-2 py-1 rounded-lg"> -35% </div>
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
      <div className="absolute top-2 right-2 flex flex-col">
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


export const LRSlider = ({ items, visibleItems }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = items.length;
  const totalVisibleSlides = Math.ceil(totalSlides / visibleItems);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % totalVisibleSlides;
    setCurrentIndex(nextIndex);
    sliderRef.current.style.transform = `translateX(-${(100 / totalVisibleSlides) * nextIndex}%)`;
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + totalVisibleSlides) % totalVisibleSlides;
    setCurrentIndex(prevIndex);
    sliderRef.current.style.transform = `translateX(-${(100 / totalVisibleSlides) * prevIndex}%)`;
  };

  return (
    <div className="relative">
      <div ref={sliderRef} className="flex overflow-hidden" style={{ scrollBehavior: 'smooth', transition: 'transform 0.5s ease' }}>
        {items.map((item, index) => (
          <div key={index} className={`w-${100 / visibleItems} px-2 mx-4`}>
            <StoreItemCard
              imgSrc={item.imgSrc}
              title={item.title}
              originalPrice={item.originalPrice}
              discountedPrice={item.discountedPrice}
              stars={item.stars}
              reviewCount={item.reviewCount}
            />
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full" onClick={prevSlide}>  &lt; </button>
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full" onClick={nextSlide}> &gt; </button>
    </div>
  );
};
