import React from 'react'
import { offer } from "../assets/images"
import { arrowRight } from '../assets/icons'

//how we can further  improve the animations is using 
//some custom animations
const SpecialOffers = () => {
  return (
   <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
     <div className='flex-1'>
      <img src={ offer} width={773}
      height={687} className='object-contain w-full'/>
      </div> 
      {/* after this we will copy paste the code from super quality section ie doing code reusability */}
      <div className='flex flex-1 flex-col'>


        <h2 className='mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
         We Provide You

         <span className='text-coral-red'>
          Special 

         </span>
         Offer
       
         
        
          
        </h2>
        <p className='mt-4 lg:max-w-lg'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals From premier selections to incredible savings we offer unparalled value that sets us apart
        
        </p>
        <p className='mt-6 lg:max-w-lg'>
         Navigate a realm of possibilites designed to fulfill your unique desires surpassing 
         the loftiest expectations Your journey with us is nothing short of exceptional 
        </p>
        {/* <button label="View Details" /> */}
        <div className='mt-11 flex flex-wrap gap-4'>

        <button  label="Show Now"
        iconURL={arrowRight}/>
        <button label="Learn more"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray"/>
        
        </div>

      </div>
   
   </section>
  )
}

export default SpecialOffers