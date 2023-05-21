'use client'; 

import React from 'react'; 
import { usePathname } from 'next/navigation'; 
import SidebarItems from './SidebarItems';
import { AiFillHome, AiFillBook } from 'react-icons/ai'; 
import { FaUsers, FaHouseUser } from 'react-icons/fa'

const Sidebar = () => {
    const pathname = usePathname(); 

    const sidebarItems = [
        {
            id: 1,
            label: "Home",
            active: pathname === "/",
            href: "/",
            icon: AiFillHome
        },
        {
            id: 2,
            label: "Cases",
            active: pathname === "/cases",
            href: "/cases",
            icon: AiFillBook
        },
        {
            id: 3,
            label: "Clients",
            active: pathname === "/clients",
            href: "/clients",
            icon: FaUsers
        },
        
    ]
  return (
    <div className="hidden lg:block py-5 px-2 sticky top-0">
        <h1 className="text-lg md:text-2xl font-bold text-myViolet">Law Diary</h1>
        <div>
            {sidebarItems.map((item) => (
                <SidebarItems 
                    key={item.id}
                    label={item.label}
                    active={item.active}
                    href={item.href}
                    icons={item.icon}


                />
            ))}

        </div>
    </div>
  )
}

export default Sidebar