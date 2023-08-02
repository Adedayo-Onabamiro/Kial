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
      <div className=" w-4/5 h-full">
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

export const AutoSlider = () => {
  const categories = [
    {
      imgSrc : "apple.png",
      title : "iPhone 14 Series",
      logo : "applelogo.png",
    },
    {
      imgSrc : "apple.png",
      title : "iPhone 13 Series",
      logo : "applelogo.png",
    },
    {
      imgSrc : "apple.png",
      title : "iPhone 12 Series",
      logo : "applelogo.png",
    },
    {
      imgSrc : "apple.png",
      title : "iPhone 11 Series",
      logo : "applelogo.png",
    },
  ];

  return (
    <Swiper
      spaceBetween={30} centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <HomeCatSliderItem
            imgSrc={category.imgSrc}
            title={category.title}
            logo={category.logo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
