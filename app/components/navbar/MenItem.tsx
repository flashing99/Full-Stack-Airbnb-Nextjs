
'use client';
import React from 'react'

interface menuItemProps{
    onClick : () => void,
    label:String

}


const MenuItem: React.FC<menuItemProps> = ({onClick, label}) => {


  return (

    <div 
    onClick={onClick}
    className='
         font-semibold
         text-sm hover:bg-neutral-200 
         px-4 
         py-3 
         transition
    
    '>{label}</div>
  )
}

export default MenuItem