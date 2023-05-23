import { Client } from '@prisma/client'
import React from 'react'


interface ClientDetailsProps {
    client: Client | null | undefined
}
const ClientDetails: React.FC<ClientDetailsProps> = ({
    client
}) => {
  return (
    <section>
        <div className="glassmorphism w-[70%] flex flex-col gap-3">
            <div>
                <h1 className="text-2xl font-bold text-gray-500">Client Details</h1>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                    <label>Client Name: </label>
                    <span>{client?.clientName}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <label>Client Email: </label>
                    <span>{client?.email}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <label>Client Address: </label>
                    <span>{client?.address}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <label>Client Mobile: </label>
                    <span>{client?.mobile}</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ClientDetails