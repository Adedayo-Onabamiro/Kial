import React, { useState, useEffect,useRef } from 'react';
import { StoreItemCard } from '../General/StoreItemCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
    <div className='border border-red-500 h-auto w-full my-10 flex flex-col items-end'>
      <Todays items={items}></Todays>
      <Categories></Categories>
    </div>
  )
}

// todays section code starts

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
        <div key={unit} className="text-center px-1">
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
    <div className='h-auto w-11/12 my-10 flex flex-col'>
        <div className='w-full h-11 flex flex-row items-center'> <div className='h-full w-6 bg-red-600 rounded-lg'></div> <p className='text-red-600 text-lg font-semibold mx-3'>Today's</p> </div>
        <div className='w-auto h-auto flex flex-row items-end my-2'> <h1 className='text-3xl font-bold md:mr-9'>Flash Sales</h1> <CountdownTimer targetDate={targetDate} /> </div>
        <div className='my-8 w-full flex items-center justify-center'> <StoreItemSlider items={items} /> </div>
        <div className='w-full h-auto flex items-center justify-center'> <button className='bg-red-600 px-4 py-2 text-white'>View All Products</button> </div>
    </div>
  )
}

export const StoreItemSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const numSlides = Math.ceil(items.length / itemsPerPage);
  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex < numSlides - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, numSlides - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const sliderTransform = `translateX(-${currentIndex * (100 / numSlides)}%)`;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-300" style={{ transform: sliderTransform }}>
        {items.map((item, index) => (
          <div key={index} className="w-80 mr-4">
            <StoreItemCard {...item} />
          </div>
        ))}
      </div>
      {showPrevButton && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
        </button>
      )}
      {showNextButton && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
        </button>
      )}
    </div>
  );
};

// todays section code ends

// categories section code starts
const CategoriesSlider = ({ CategoriesItems }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const numSlides = Math.ceil(CategoriesItems.length / itemsPerPage);
  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex < numSlides - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, numSlides - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const sliderTransform = `translateX(-${currentIndex * (100 / numSlides)}%)`;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-300" style={{ transform: sliderTransform }}>
        {CategoriesItems.map((item, index) => (
          <div key={index} className="w-80 mr-4">
            <CategoriesSliderItems {...item} />
          </div>
        ))}
      </div>
      {showPrevButton && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
        </button>
      )}
      {showNextButton && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-lg"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
        </button>
      )}
    </div>
  );
};

const CategoriesSliderItems = ({ imgSrc, title }) => {
  return (
    <div className="border p-6 flex flex-col items-center justify-center">
      <img className="object-fit h-20 w-20" src={imgSrc} alt={title} />
      <p className="text-black"> {title} </p>
    </div>
  );
};

export const Categories = () => {
  const CategoriesItems = [
    {
      imgSrc: './img/Category-CellPhone.png',
      title: 'Phones',
    },
    {
      imgSrc: './img/Category-Computer.png',
      title: 'Computers',
    },
    {
      imgSrc: './img/Category-Smartwatch.png',
      title: 'SmartWatch',
    },
    {
      imgSrc: './img/Category-Camera.png',
      title: 'Camera',
    },
    {
      imgSrc: './img/Category-Headphone.png',
      title: 'HeadPhones',
    },
    {
      imgSrc: './img/Category-CellPhone.png',
      title: 'CellPhone',
    },
    
  ];
  
  return (
    <div className="h-auto w-11/12 my-10 flex flex-col">
      <div className="w-11/2 h-11 flex flex-row items-center">
        <div className="h-full w-6 bg-red-600 rounded-lg"></div>
        <p className="text-red-600 text-lg font-semibold mx-3"> Categories </p>
      </div>
      <div className="w-auto h-auto flex flex-row items-end my-2">
        <h1 className="text-3xl font-bold md:mr-9"> Browse By Category </h1>
      </div>
      <div className="my-8 w-11/12 h-full">
        <CategoriesSlider CategoriesItems={CategoriesItems} /> 
      </div>
    </div>
  );
};

// categories section code Ends