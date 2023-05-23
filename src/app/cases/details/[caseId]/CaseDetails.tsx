'use client'; 

import { User } from '@prisma/client';
import React from 'react'; 
import IADetails from './IADetails';

interface CaseDetailsProps {
    courtCase: Record<string, any> | null; 
}

const CaseDetails: React.FC<CaseDetailsProps> = ({
    courtCase
}) => {
  return (
    <div className="glassmorphism flex flex-col gap-3 w-[70%]">
    <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold text-gray-500">Case Details</h1>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600" >Register Number: </label>
      <span>{courtCase?.regno}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">CNR Number: </label>
      <span>{courtCase?.cnrNo}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Hearing Date: </label>
      <span>{courtCase?.hearingDate}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Date: </label>
      <span>{courtCase?.date}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Client Name </label>
      <span>{courtCase?.client?.clientName}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Case Name </label>
      <span>{courtCase?.caseName}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Court Name: </label>
      <span>{courtCase?.courtName}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Place </label>
      <span>{courtCase?.courtPlace}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Opposite Party </label>
      <span>{courtCase?.oppositeParty}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Opposite Advocate </label>
      <span>{courtCase?.oppositeAdvocate}</span>
    </div>
    <div className="flex flex-row justify-between">
      <label className="text-base text-gray-600">Description </label>
      <span>{courtCase?.description}</span>
    </div>
   
  </div>
  )
}

export default CaseDetails