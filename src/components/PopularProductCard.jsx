import React from 'react'

import { star } from '../assets/icons';

// konse konse case me konsi  tailwind classes usekark sahi appearance aegi this you will get to know by try and terstin 
// eventually this will come with experience
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img
      src={imgURL} alt={name}
      className='w-[280px] h-[280px]'
      />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width={24} height={24}/>
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>

      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal'>{price}</p>
     
      
      
    </div>
  )
}

export default PopularProductCard
