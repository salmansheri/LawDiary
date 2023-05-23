'use client'; 
import React, { useCallback, useState } from 'react'
import Table from './Table'; 
import { AiFillEdit } from 'react-icons/ai'; 
import { useRouter } from 'next/navigation'; 
import { Case, User } from '@prisma/client';
import Search from '../search/Search';
import { FcViewDetails } from 'react-icons/fc'


interface casesTableProps {
  courtCases?: Array<any> | null | undefined; 
  currentUser?: User | null; 
  isProfile?: boolean; 
}

const CasesTable: React.FC<casesTableProps> = ({
  courtCases,
  currentUser,
  isProfile
}) => {
  const [searchText, setSearchText] = useState(""); 
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
          {isProfile && (
            <>
          <th>Edit Case</th>
          <th>Details</th>
            </>

          )}
        </tr>
      </thead>
        
    )

    const tableBodyContent = (
        <tbody>
          
        {courtCases?.filter(cases => cases?.regno?.includes(searchText) || 
          cases?.cnrNo?.includes(searchText) || 
          cases?.date.includes(searchText) || 
          cases?.hearingDate.includes(searchText) || 
          cases?.clientName?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.caseName?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.caseStatus?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.courtName?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.courtPlace?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.opposityParty?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.oppositeAdvocate?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.description?.toLowerCase().includes(searchText.toLowerCase()) || 
          cases?.client?.clientName.toLowerCase().includes(searchText.toLowerCase())
        ).map((cases: Record<string, any>, index: number) => (

        <tr key={cases.id}>
          <th>{index + 1}</th>
          <td>{cases.regno}</td>
          <td>{cases.caseName}</td>
          <td>{cases?.client?.clientName}</td>
          <td>{cases.courtName}</td>
          <td>{cases.courtPlace}</td>
          <td>{cases.date}</td>
          <td>{cases.hearingDate}</td>
          <td>{cases.caseStatus}</td>
          {isProfile && (
            <>
          <td>
            <button onClick={() => router.push(`/cases/edit/${cases?.id}`)}>
              <AiFillEdit className="text-myViolet" size={20} />

            </button>
          </td>
          <td>
            <button onClick={() => router.push(`/cases/details/${cases?.id}`)}>
              <FcViewDetails className="text-myViolet" size={20} />

            </button>
          </td>
            </>
          )}
        </tr>
        ))}
      </tbody>
    )

    const handleClick  = useCallback(() => {
      router.push("/cases/add")
  
    }, [router])
  return (
    <>
    <div>
      <Search 
        searchText={searchText}
        // @ts-ignore
        setSearchText={setSearchText}
      />
    </div>
    <Table 
        title='All Cases' 
        subTitle='Go to Clients Page To Add Cases to the Appropriate Clients'
        tableHead={tableHeadContent} 
        tableBody={tableBodyContent}
        areaLabel='Add Cases' 
        onClick={handleClick} 
        />
        </>
  )
}

export default CasesTable