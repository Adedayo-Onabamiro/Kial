import React from 'react';
import { Attributes } from '../Components/Home/Contents';
import { Title } from '../Components/General/Title';

export const About = () => {
  const items = [
    {
      id: 1,
      name: "Adedayo Onabamiro",
      role: "CEO",
      imgSrc: "/img/team/1.png",
    },
    {
      id: 2,
      name: "Funsho Obalende",
      role: "CFO",
      imgSrc: "/img/team/2.png",
    },
    {
      id: 3,
      name: "Gani Adamu",
      role: "CTO",
      imgSrc: "/img/team/3.png",
    },
    {
      id: 4,
      name: "Marcus Chillwell",
      role: "Lead Developer",
      imgSrc: "/img/team/4.png",
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
  const AchievementData = [
    {
      id: 1,
      title: '10.5K',
      description: 'Sallers active our site',
      iconSrc: './img/icon_shop.png',
    },
    {
      id: 2,
      title: '33K',
      description: 'Monthly Produduct Sale',
      iconSrc: './img/Icon-Sale.png',
    },
    {
      id: 3,
      title: '45.5K',
      description: 'Customer active in our site',
      iconSrc: './img/Icon-Shopping bag.png',
    },
    {
        id: 4,
        title: '25K',
        description: 'Anual gross sale in our site',
        iconSrc: './img/Icon-moneybag.png',
      },
  ];
  return (
    <>
      <Title title="Our Team" link="Home / About" />
      <div className='md:h-96 my-28 h-auto w-full flex flex-col md:flex-row items-center justify-between'>
        <div className='w-11/12 py-[5%] px-[8%] md:w-[48%] h-full flex flex-col items-center md:items-start md:text-left text-center justify-evenly'>
            <p className='text-3xl mb-4 font-semibold'>Our Story</p>
            <p className='mb-4 '> Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
            <p className='mb-4 '> Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className='w-11/12  md:w-[48%] h-full'>
        <img className='h-full w-full object-cover' src='./img/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png' />
        </div>
        </div>
      <Attributes data={AchievementData} />
      <div className='w-full my-10 flex items-center justify-center'>
        <div className="w-10/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((t) => (
            <div className="shadow-md p-4 rounded-md text-center" key={t.id}>
              <img src={t.imgSrc} alt="Avatar" className="w-full object-contain" />
              <div className="mt-2">
                <h4 className="font-bold">{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Attributes data={attributeData} />
    </>
  );
};
