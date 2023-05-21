'use client'; 
import { IoIosAdd } from 'react-icons/io'

import React from 'react'; 

interface ButtonProps {
    label: string; 
    onClick?: () => void; 
    type?: string;
    addBtn?: boolean; 
}


const Button:React.FC<ButtonProps> = ({
    label,
    onClick,
    type,
    addBtn,

}) => {
  return (
    <button onClick={onClick} className={`${addBtn ? "border-4 border-myViolet": "bg-myViolet"}
        ${addBtn ? "text-black": "text-white"}
    px-4 py-2 rounded-md shadow-md  ${addBtn ? "hover:bg-myViolet hover:text-white": "hover:bg-opacity-80"} flex flex-row gap-1 items-center`}>
      
      { addBtn &&  <IoIosAdd size={30} color={`${addBtn ? "black": "white"}`} />}
        {label}
    </button>
  )
}

export default Button