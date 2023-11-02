import React from 'react'

// mention all the props that yoy will be passing in this child  functional components




const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    //here we will define the local functions that we will be using inside this functional component

    const handleClick=()=>{

        if(bigShoeImg!=imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe);
            // beware to use to right variable names
        }
    }

  return (
    <div className={
    `border-2 rounded-xl


    ${bigShoeImg===imgURL.bigShoe?'border-coral-red':'border-transparent'}
    cursor-pointer max-sm:flex-1

    `}
    onClick={handleClick}
    >

        <div className='flex justify-center items-center
        bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img
            src={imgURL.thumbnail}
            alt="shoe collection"

            width={127}
            height={103}
            className='object-contain'
            />

        </div>
        shoecard
      
    </div>
  )
}

export default ShoeCard
