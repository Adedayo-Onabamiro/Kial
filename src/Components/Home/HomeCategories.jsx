import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState,useEffect } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
    <div className="w-10/12 h-96 border-8 border-black flex flex-row items-center justify-between">
      <div className="border-gray-400 border-r w-auto h-full flex flex-col">
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
      <div className=" w-4/5 h-full border-2 border-red-500">
        <Slideshow></Slideshow>
        {/* <AutoSlider></AutoSlider> */}
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
        <h2 className='text-5xl font-semibold w-10/12 text-white'> Up to 10% off Voucher </h2>
        <span className='flex flex-row items-center text-center'> <a href='#'> <p className='text-white underline inline-block'>Shop Now</p> <FontAwesomeIcon className='text-white text-lg px-2' icon={faArrowRight} /> </a></span>
      </div>

      <div className='w-1/2 h-full'> <img className='w-full h-full object-contain' src={`./img/${imgSrc}`} alt='item' /> </div>
    </div>
  );
}

const categories = [
  {
    imgSrc: "./img/apple.png",
    title: "iPhone 14 Series",
    logo: "./img/applelogo.png",
  },
  {
    imgSrc: "./img/apple.png",
    title: "iPhone 13 Series",
    logo: "./img/applelogo.png",
  },
  {
    imgSrc: "./img/apple.png",
    title: "iPhone 12 Series",
    logo: "./img/applelogo.png",
  },
  {
    imgSrc: "./img/apple.png",
    title: "iPhone 11 Series",
    logo: "./img/applelogo.png",
  },
];

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative rounded-lg shadow-lg">
      <img
        src={categories[currentSlide].imgSrc}
        alt={`Slide ${currentSlide + 1}`}
        className="rounded-lg"
      />
      <div className="absolute left-0 bottom-0 w-full h-4 flex justify-center items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full mx-1 ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <div className="absolute left-0 bottom-0 w-full bg-black text-white p-4">
        <h2 className="text-lg font-semibold">{categories[currentSlide].title}</h2>
        <img src={categories[currentSlide].logo} alt="Logo" className="w-10 h-10" />
      </div>
    </div>
  );
};
