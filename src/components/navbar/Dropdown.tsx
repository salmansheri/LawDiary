'use client'; 
import Link from 'next/link';

import React from 'react'; 

interface DropdownProps {
  currentUser?: boolean; 
}

const Dropdown: React.FC<DropdownProps> = ({
  currentUser
}) => {
  return (
    <div className=" w-full mb-5 flex items-center justify-end gap-2 dropdown relative">
      <label tabIndex={0} className="flex items-center gap-1">
        <span className="uppercase bg-myViolet text-white h-8 w-8 items-center justify-center font-bold rounded-full flex text-xl">s</span>
        <div className="hidden md:block font-semibold">Welcome Salman Sheriff!</div>

      </label>
      <ul tabIndex={0} className="absolute dropdown-content menu p-2 bg-zinc-500 text-white rounded-box w-52 top-10 ">
        
          <Link href="/profile">My Profile</Link>
       
        <li >
          Sign Out

        </li>
      </ul>
      </div>
  )
}

export default Dropdown