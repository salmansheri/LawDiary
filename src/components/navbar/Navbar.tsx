'use client'; 

import React from 'react'; 
import { useRouter, usePathname } from 'next/navigation'; 
import { AiOutlineBook, AiOutlineUserAdd } from 'react-icons/ai'; 



const Navbar = () => {
    const router = useRouter(); 
    const pathname = usePathname(); 
    const isHome = pathname === "/"; 
    const isCases = pathname === "/cases";
    const isClients = pathname === "/clients";  
  return (
    <div className="btm-nav flex lg:hidden">
    <button onClick={() => router.push("/")} className={`${isHome && "active"}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      <span className="btm-nav-label">Home</span>
    </button>
    <button className={`${isCases && "active"}`} onClick={() => router.push("/cases")}>
     <AiOutlineBook />
      <span className="btm-nav-label">Cases</span>
    </button>
    <button className={`${isClients && "active"}`} onClick={() => router.push("/clients")}>
     <AiOutlineUserAdd />
      <span className="btm-nav-label">Clients</span>
    </button>
  </div>
  )
}

export default Navbar