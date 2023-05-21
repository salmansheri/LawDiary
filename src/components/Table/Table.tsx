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
}

const Table: React.FC<TableProps> = ({
    title,
    areaLabel,
    tableBody,
    tableHead,
    onClick,
}) => {
  const router = useRouter(); 
 
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row justify-between items-center">

       <h1 className="text-3xl mb-5 font-semibold">{title}</h1>
       <Button
        label={areaLabel as string}
        type="button"
        onClick={onClick}
        addBtn

       /> 
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