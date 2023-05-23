'use client'; 
import Link from 'next/link';

import React, { useEffect, useState } from 'react'; 
import Button from '../Button';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import { signOut, useSession } from 'next-auth/react'; 
import { User } from '@prisma/client';

interface DropdownProps {
  currentUser: User | null | undefined
}

const Dropdown: React.FC<DropdownProps> = ({
  currentUser
}) => {
  const loginModal = useLoginModal(); 
  const registerModal = useRegisterModal(); 
  const { data: session } = useSession(); 
  const name = currentUser?.name; 

   

 

  return (
    <>
    {!currentUser?.email ? (

    <div className="flex flex-row gap-5 justify-end mb-5">
      <Button label="Login" onClick={loginModal.onOpen} />
      <Button label='Register' onClick={registerModal.onOpen} />
      
    </div>
    ): (

    <div className=" w-full mb-5 flex items-center justify-end gap-2 dropdown relative">
      <label tabIndex={0} className="flex items-center gap-1">
        {/* @ts-ignore  */}
        <span className="uppercase bg-myViolet text-white h-8 w-8 items-center justify-center font-bold rounded-full flex text-xl">{name[0]}</span>

        <div className="hidden md:block font-semibold">Welcome {name}!</div>

      </label>
      <ul tabIndex={0} className="absolute dropdown-content menu p-2 bg-zinc-500 text-white rounded-box w-52 top-10 ">
        
          <Link href="/profile">My Profile</Link>
       
        <div className="cursor-pointer" onClick={() => signOut()} >
          Sign Out

        </div>
      </ul>
      </div>
    )}
    </>
  )
}

export default Dropdown