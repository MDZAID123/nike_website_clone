import React from 'react'

//we can add icons to a button by just adding an img tag in them
//justify center-center horizontally 
//items-center -center vertically
//just making the class name here dynamic
//now accept all the new props here that you got here 
//need to pass all the appropriate props in this 
const button = ({label , iconurl,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`flex justify-center 
    items-center gap-2 px-7 py-4 border
     font-montserrat tet-lg leading-none
     ${
      backgroundColor
     ?`${backgroundColor} ${textColor} ${borderColor}`
     :"bg-coral-red  text-white border-coral-red"} rounded-full ${fullWidth && 'w-full'}"`}
     >
        {label}
       

        {iconurl && 
        

        <img 
        src={iconurl} alt="arrow right icon"
        className='ml-2 rounded-full w-5 h-5'/>}
      
    </button>
  )
}

export default button
