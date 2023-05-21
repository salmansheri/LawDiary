'use client'; 
import React, { useCallback } from 'react'
import Table from './Table'; 
import { AiFillEdit } from 'react-icons/ai'; 
import { useRouter } from 'next/navigation'; 

const CasesTable = () => {
  const router = useRouter(); 
    const tableHeadContent = (
        <thead className="">
        <tr className='bg-myViolet text-white'>
          <th>S.No</th>
          <th>Case No</th>
          <th>Case Name</th>
          <th>Client Name</th>
          <th>Court</th>
          <th>Place</th>
          <th>Previous Date</th>
          <th>Next Date</th>
          <th>Status</th>
          <th>Edit Case</th>
        </tr>
      </thead>
        
    )

    const tableBodyContent = (
        <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
          <td>Blue</td>
          <td>Blue</td>
          <td>Blue</td>
          <td>Blue</td>
          <td>Blue</td>
          <td>
            <button onClick={() => router.push("/cases/edit/123")}>
              <AiFillEdit className="text-myViolet" size={20} />

            </button>
          </td>
        </tr>
      </tbody>
    )

    const handleClick  = useCallback(() => {
      router.push("/cases/add")
  
    }, [router])
  return (
    <Table 
        title='All Cases' 
        tableHead={tableHeadContent} 
        tableBody={tableBodyContent}
        areaLabel='Add Cases' 
        onClick={handleClick} 
        />
  )
}

export default CasesTable