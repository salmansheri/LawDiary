'use client'; 

import React, { useCallback } from 'react'; 
import Button from '../Button';
import { useRouter } from 'next/navigation';

interface TableProps {
    title: string; 
    tableHead?: React.ReactElement; 
    tableBody?: React.ReactElement; 
    areaLabel?: string; 
    onClick? : () => void;
    subTitle?: string;  
}

const Table: React.FC<TableProps> = ({
    title,
    areaLabel,
    tableBody,
    tableHead,
    onClick,
    subTitle
}) => {
  const router = useRouter(); 
 
  return (
    <div className="overflow-x-auto">
      <div className="">

       <h1 className="text-3xl mb-5 font-semibold">{title}</h1>
       <p className='mb-5 text-gray-400 text-base italic'>{subTitle}</p>
      
      </div>
    <table className="table table-zebra w-full">
      {/* head */}
      {tableHead}
      {tableBody}
    </table>
  </div>
  )
}

export default Table