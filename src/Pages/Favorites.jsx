import React, { useContext } from 'react'
import {FavoriteContext, ProductContext } from '../ProductContext';
import { StoreItemCard } from '../Components/General/StoreItemCard';

export const Favorites = () => {
  return (
    <div className='h-auto w-full flex flex-row justify-center items-center border border-red-500 my-12'>
      <div className='w-10/12 h-full border border-black flex flex-col items-start justify-center'>
        <div className='w-full border-4 border-red-700 flex flex-row justify-between items-center'> <p>Wishlist (5)</p> <button className='px-6 py-4 border border-black'> Move All To Bag </button> </div>
        <ItemDisplayBox></ItemDisplayBox>
      </div>
    </div>
  )
}


export const ItemDisplayBox = () => {
  const {favoriteItems} = useContext( FavoriteContext );
  
  return (
    <div className='h-96 w-full flex items-center justify-center flex-col'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {favoriteItems.map((item) => (
          <div key={item.id}>
            <StoreItemCard {...item}  />
          </div>
        ))}
        </div>
    </div>
  )
}