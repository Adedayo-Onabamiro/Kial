import React from 'react'
import { HomeCategories } from '../Components/Home/HomeCategories'
import { Contents } from '../Components/Home/Contents'

export const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <HomeCategories></HomeCategories>
        <Contents></Contents>
    </div>
  )
}
