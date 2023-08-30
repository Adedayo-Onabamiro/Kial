import React, { useState, useEffect,useContext ,useRef } from 'react';
import { StoreItemCard } from '../General/StoreItemCard';
import { ProductContext } from '../../ProductContext';
import { fetchProducts } from '../../ApiCall';

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
  {
    imgSrc: './img/p1.png',
    title: 'Body Louvre',
    originalPrice: 50,
    discountedPrice: 32,
    stars: 4,
    reviewCount: 80,
  },
];
const attributeData = [
  {
    id: 1,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
    iconSrc: './img/icon-delivery.png',
  },
  {
    id: 2,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    iconSrc: './img/Icon-Customer service.png',
  },
  {
    id: 3,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
    iconSrc: './img/Icon-secure.png',
  },
];
export const Contents = () => {
  
  return (
    <div className='h-auto w-full my-10 flex flex-col items-end'>
      <Todays items={items}></Todays>
      <Categories></Categories>
      <ThisMonth></ThisMonth>
      <div className='p-10 w-10/12 mx-auto flex flex-col items-center justify-center md:flex-row bg-black'>
          <div className='md:w-1/2 w-full bg-green flex flex-col md:items-start items-center md:text-left text-center justify-evenly'>
            <p className='text-green-700 my-5 text-xl font-bold'> Categories </p>
            <p className='lg:text-6xl text-3xl my-5 font-semibold text-white md:w-4/5'>Enhance Your Music Experience</p>
            <div className='hidden sm:flex flex-row my-5'> 
              <div className='flex flex-col bg-white items-center justify-center rounded-full lg:h-20 lg:w-20 w-16 p-2 m-2'> <p className='font-bold lg:text-xl '>23</p> <p className='font-semibold text-xs lg:text-lg'>Hours</p> </div> 
              <div className='flex flex-col bg-white items-center justify-center rounded-full lg:h-20 lg:w-20 w-16 p-2 m-2'> <p className='font-bold lg:text-xl '>05</p> <p className='font-semibold text-xs lg:text-lg'>Days</p> </div> 
              <div className='flex flex-col bg-white items-center justify-center rounded-full lg:h-20 lg:w-20 w-16 p-2 m-2'> <p className='font-bold lg:text-xl '>59</p> <p className='font-semibold text-xs lg:text-lg'>Minutes</p> </div> 
              <div className='flex flex-col bg-white items-center justify-center rounded-full lg:h-20 lg:w-20 w-16 p-2 m-2'> <p className='font-bold lg:text-xl '>35</p> <p className='font-semibold text-xs lg:text-lg'>Seconds</p> </div> 
            </div>
            <button className='bg-green-500 my-5 rounded text-white font-semibold py-3 px-8 my-x'>Buy Now!</button>
          </div>
          <div className='w-1/2 flex items-center justify-center'> <img src='./img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png' className='object-fit h-[370px] w-auto py-10' /> </div>
      </div>
      <ExploreProducts></ExploreProducts>
      <NewArrival></NewArrival>
      <Attributes data={attributeData} />
    </div>
  )
}

// todays section code starts

export const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      const targetTime = new Date(targetDate);
      const newTargetTime = new Date(targetTime);
      newTargetTime.setDate(newTargetTime.getDate() - 3);
      newTargetTime.setHours(5);
      newTargetTime.setMinutes(12);

      difference < newTargetTime - new Date()
        ? (timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          })
        : (timeLeft = {
            days: 3,
            hours: 5,
            minutes: 12,
            seconds: 0,
          });
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
    <div className="md:w-fit h-auto flex flex-row mx-10 justify-evenly">
      {Object.entries(timeLeft).map(([unit, value], index, arr) => (
        <div key={unit} className="text-center px-1">
          <p className="text-sm text-gray-500 uppercase">{unit}</p>
          <p className="text-lg sm:text-2xl md:text-3xl font-bold">
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
        <div className='w-auto justify-between md:justify-normal h-auto flex flex-row items-end my-2'> <h1 className='text-lg sm:text-2xl md:text-3xl font-bold md:mr-9'>Flash Sales</h1> <CountdownTimer targetDate={targetDate} /> </div>
        <div className='my-8 w-full flex items-center justify-center'>
           <StoreItemSlider /> 
           </div>
        <div className='w-full h-auto flex items-center justify-center'> <button className='bg-red-600 px-4 py-2 text-white'>View All Products</button> </div>
    </div>
  )
}

const StoreItemSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts(); // Use the fetchProducts function
      setProducts(data);
    }

    fetchData();
  }, []);
  const productsFromContext = useContext(ProductContext); // Use the context

  return (
    <div className="cards-container flex bg-transparent py-4 space-x-4 relative overflow-x-auto no-scrollbar">
      {productsFromContext.slice(0, 10).map((product) => (
        <div key={product.id} className="w-80 flex-shrink-0">
          <StoreItemCard {...product}  />
        </div>
      ))}
    </div>
  );
};

// todays section code ends

// categories section code starts

export const Categories = () => {
  const CategoriesItems = [
    {
      imgSrc: './img/Category-CellPhone.png',
      title: 'Gadgets',
    },
    {
      imgSrc: './img/jewelrypic.jpg',
      title: 'Jewelry',
    },
    {
      imgSrc: './img/hanger.jpg',
      title: "Men's Clothing",
    },
    {
      imgSrc: './img/Category-Camera.png',
      title: "Women's Clothing",
    },
    // {
    //   imgSrc: './img/Category-Headphone.png',
    //   title: 'HeadPhones',
    // },
    // {
    //   imgSrc: './img/Category-CellPhone.png',
    //   title: 'CellPhone',
    // },
    
  ];
  
  return (
    <div className="h-auto w-full my-10 flex flex-col items-center justify-center ">
      <div className='w-10/12'>
        <div className="w-full h-11 flex flex-row items-center">
          <div className="h-full w-6 bg-red-600 rounded-lg"></div>
          <p className="text-red-600 text-lg font-semibold mx-3"> Categories </p>
        </div>
        <div className="w-auto h-auto flex flex-row items-end my-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold md:mr-9"> Browse By Category </h1>
        </div>
        <div className="my-8 h-full flex md:flex-row md:flex-nowrap flex-wrap items-center justify-center">
        {CategoriesItems.map((item, index) => (
          <div key={index} className="w-80 mr-4">
            <CategoriesSliderItems {...item} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

const CategoriesSliderItems = ({ imgSrc, title }) => {
  return (
    <div className="border border-gray-700 m-2 lg:p-6 p-2 flex flex-col items-center justify-center">
      <img className="object-fit lg:h-16 lg:w-16 md:w-12 md:h-12 " src={imgSrc} alt={title} />
      <p className="text-black"> {title} </p>
    </div>
  );
};
// categories section code Ends

// This Month section code Starts

export const ThisMonth = () => {
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
    <div className='h-auto w-full my-10 items-center justify-center flex flex-col'>
      <div className='w-10/12'>
        <div className='w-full h-11 flex flex-row items-center'>
          <div className='h-full w-6 bg-red-600 rounded-lg'></div>
          <p className='text-red-600 text-lg font-semibold mx-3'> This Month </p>
        </div>
        <div className='h-auto flex flex-row items-end my-2 justify-between'>
          <h1 className='text-lg sm:text-2xl md:text-3xl font-bold md:mr-9'>Best Selling Products</h1>
          <button className='bg-red-600 px-4 py-2 rounded-lg text-white'>View All</button>
        </div>
        <div className='my-8 flex flex-col md:flex-row md:flex-wrap items-center md:justify-evenly'>
            {productsFromContext.slice(randomStartingIndex, randomStartingIndex + 4).map((products) => (
            <div key={products.id} className="w-72 flex-shrink-0 my-2">
              <StoreItemCard {...products}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// This Month section code Ends

//ExploreProductsGrid Starts

export const ExploreProducts = () => {
  
  return (
    <div className="h-auto w-full my-10 flex flex-col items-center justify-center ">
    <div className='w-10/12'>
      <div className="w-full h-11 flex flex-row items-center">
        <div className="h-full w-6 bg-red-600 rounded-lg"></div>
        <p className="text-red-600 text-lg font-semibold mx-3"> Our Products </p>
      </div>
      <div className="w-auto h-auto flex flex-row items-end my-2">
        <h1 className="text-lg sm:text-2xl md:text-3xl  font-bold md:mr-9"> Explore Our Products </h1>
      </div>
      <div className="my-8 h-full flex">
        <ExploreProductsGrid items={items} />
      </div>
    </div>
  </div>
  );
}

export const ExploreProductsGrid = () => {
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
  const randomStartingIndex = Math.floor(Math.random() * (productsFromContext.length - 8 + 1));

  return (
    <div className=" w-full flex items-center justify-center">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productsFromContext.slice(randomStartingIndex, randomStartingIndex + 8).map((products) => (
          <div key={products.id} className="w-70 m-2 flex-shrink-0">
            <StoreItemCard {...products}  />
          </div>
        ))}
      </div>
    </div>
  );
};


//New Arrival start

export const NewArrival = () => {
  return (
    <div className="h-auto w-full my-10 flex flex-col items-center justify-center">
    <div className='w-10/12'>
      <div className="w-full h-11 flex flex-row items-center">
        <div className="h-full w-6 rounded-lg bg-red-600"></div>
        <p className="text-red-600 text-lg font-semibold mx-3"> Featured </p>
      </div>
      <div className="w-auto h-auto flex flex-row items-end my-2"> <h1 className="text-lg sm:text-2xl md:text-3xl font-bold md:mr-9"> New Arrival </h1> </div>
      
      <div className="my-8 h-full flex flex-col md:flex-row justify-center items-center">
      <div className="w-11/12 h-full border border-red-700 my-10 md:my-0 bg-black flex rounded-lg">
        <div className="relative w-full h-[600px]">
          <img src="./img/ps5-slim-goedkope-playstation_large 1.png" alt="PlayStation 5" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-4/5 object-contain" />
          <div className="absolute bottom-0 left-0 p-4">
            <h1 className="text-white text-4xl font-bold">PlayStation 5</h1>
            <h2 className="text-white text- mt-2">Black and White version of the PS5 coming out on sale.</h2>
            <a href="#" className="text-white mt-2 underline">
              Shop Now
            </a>
          </div>
        </div>
      </div>

        <div className='w-11/12 h-full flex flex-col justify-between ml-4'>
          <div className='flex flex-row justify-between mb-4 h-[300px] bg-black rounded-lg '>
            <div className="relative w-full rounded-lg bg-cover bg-center">
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-full object-contain' src='./img/attractive-woman-wearing-hat-posing-black-background 1.png' />
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="text-white text-4xl font-bold">Women's Collections</h1>
                <h2 className="text-white mt-2">Featured woman collections that give you another vibe.</h2>
                <a href='#' className="text-white mt-2 underline">Shop Now</a>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-between h-[285px]'>
          <div className="relative w-[49%] rounded-lg bg-black">
            <img src="./img/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" alt="Speaker" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-4/5 h-full object-contain" />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-white text-4xl font-bold">Speakers</h1>
              <h2 className="text-white mt-2">Amazon wireless speakers</h2>
              <a href="#" className="text-white mt-2 underline">
                Shop Now
              </a>
            </div>
          </div>

          <div className="relative w-[49%] rounded-lg bg-black">
            <img src="./img/652e82cd70aa6522dd785109a455904c.png" alt="Perfume" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 h-full  object-contain" />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-white text-4xl font-bold">Perfume</h1>
              <h2 className="text-white mt-2">GUCCI INTENSE OUD EDP</h2>
              <a href="#" className="text-white mt-2 underline">
                Shop Now
              </a>
            </div>
          </div>
          </div>
        </div>
    </div>


    </div>
  </div>
  );
}

export const Attributes = ({ data }) => {
  return (
    <div className="flex justify-center w-full items-center">
      <div className="w-10/12 flex md:flex-row flex-col items-center justify-between">
        {data.map((item) => (
          <div
            key={item.id}
            className="md:w-1/3 w-5/6 p-4 rounded-lg m-2 flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-16 h-16 rounded-full bg-black border-4 border-gray-500 flex items-center justify-center">
              <img src={item.iconSrc} alt={`${item.title} Icon`} className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
