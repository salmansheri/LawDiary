import { User } from '@prisma/client';
import React from 'react'


interface LawyerDetailsProps {
    lawyer: User | null | undefined
}
const LawyerDetails: React.FC<LawyerDetailsProps> = ({
    lawyer,
}) => {
  return (
    <section>
        <div className="glassmorphism w-[70%] flex flex-col gap-3">
            <div className="mb-3">
                <h1 className="text-gray-500 font-bold text-2xl">Lawyer Details</h1>
            </div>
            <div className="flex flex-row justify-between">
                <label>Lawyer Name: </label>
                <span>{lawyer?.name}</span>
            </div>
            <div className="flex flex-row justify-between">
                <label>Lawyer Email: </label>
                <span>{lawyer?.email}</span>
            </div>
           
        </div>

    </section>
  )
}

export default LawyerDetails