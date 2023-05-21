'use client'; 
import React from 'react'; 
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';

interface SidebarItemsProps {
    label: string; 
    href?: string; 
    active?: boolean;
    icons?: IconType;  
    
}

const SidebarItems: React.FC<SidebarItemsProps> = ({
    label,
    href,
    active,
    icons: Icon,
    
}) => {
    const router = useRouter(); 

    const handleRoutes = React.useCallback(() => {
        router.push(href as string)

    }, [href, router]); 
  return (
    <div className={`my-2 flex gap-1 items-center justify-start px-1 py-1 rounded-md hover:bg-violet-400/60  cursor-pointer ${active && "bg-myViolet text-white "}`} onClick={handleRoutes}>
        <div>
            {/* @ts-ignore  */}
            <Icon size={18} />
        </div>
        <div>
            {label}

        </div>


    </div>
  )
}

export default SidebarItems