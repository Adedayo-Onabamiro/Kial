import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState,useEffect } from 'react';

export const HomeCategories = () => {
  const categories = [
    'Woman’s Fashion',
    'Men’s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
    'Health & Beauty',
  ];

  return (
    <div className="w-10/12 h-auto flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="md:w-auto w-full h-full flex-wrap justify-center my-10 md:my-0 flex flex-row md:flex-col">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="px-4 py-2 font-semibold hover:font-bold"
          >
            {category}
          </a>
        ))}
      </div>
      <div className="w-full md:w-4/5 h-96">
        <Slideshow></Slideshow>
      </div>
    </div>
  );
};

export const HomeCatSliderItem = (props) => {
  const { imgSrc, title, logo } = props;
  return(
    <div className='w-full h-full border bg-black flex flex-row items-center justify-between '>
      <div className='w-1/2 h-5/6 px-[5%] flex flex-col justify-evenly'>
        <span className='flex flex-row items-center'> <img className='h-10 w-10 object-contain' src={`./img/${logo}`} alt='miniImg' /> <p className='text-white'>{title}</p> </span>
        <h2 className='text-xl md:text-3xl lg:text-5xl font-semibold md:w-10/12 text-white'> Up to 10% off Voucher </h2>
        <span className='flex flex-row items-center text-center'> <a href='#'> <p className='text-white underline inline-block'>Shop Now</p> <FontAwesomeIcon className='text-white text-lg px-2' icon={faArrowRight} /> </a></span>
      </div>

      <div className='w-1/2 h-full'> <img className='w-full h-full object-contain' src={`./img/${imgSrc}`} alt='item' /> </div>
    </div>
  );
}

const categories = [
  {
    imgSrc: "./apple.png",
    title: "iPhone 14 Series",
    logo: "./applelogo.png",
  },
  {
    imgSrc: "./apple.png",
    title: "iPhone 13 Series",
    logo: "./applelogo.png",
  },
  {
    imgSrc: "./apple.png",
    title: "iPhone 12 Series",
    logo: "./applelogo.png",
  },
  {
    imgSrc: "apple.png",
    title: "iPhone 11 Series",
    logo: "applelogo.png",
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative rounded-lg shadow-lg">
      <HomeCatSliderItem
        imgSrc={categories[currentSlide].imgSrc}
        title={categories[currentSlide].title}
        logo={categories[currentSlide].logo}
      />
      <div className="absolute left-0 bottom-8 w-full h-4 flex justify-center items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full mx-1 border border-white ${
              index === currentSlide ? "bg-red-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
