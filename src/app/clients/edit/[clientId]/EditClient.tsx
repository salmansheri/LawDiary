'use client'; 

import Button from '@/components/Button';
import { Client } from '@prisma/client';
import axios from 'axios';
import React, { useCallback, useState, useEffect } from 'react'; 
import { useRouter } from 'next/navigation'; 
import { toast } from 'react-hot-toast';

interface EditClientProps {
    client: Client |null
}

const EditClient: React.FC<EditClientProps> = ({
    client
}) => {
    const router = useRouter(); 
    const [name, setName] = useState(client?.clientName); 
    const [email, setEmail] = useState(client?.email); 
    const [address, setAddress] = useState(client?.address); 
    const [mobile, setMobile] = useState(client?.mobile); 

    const handleUpdate = useCallback((clientId: any) => {
        axios.patch(`/api/clients/${clientId}`, {
            clientName: name,
            email,
            address,
            mobile,
        })
        .then(() => {
            toast.success("Updated Successfully"); 
            router.push("/clients"); 
        })
        .catch((error: any) => {
            toast.error("Someting Went Wrong"); 
        })
        

    }, [name, email, address, mobile, router])



  return (
    <section>
        <div className="glassmorphism flex flex-col gap-3">
        <div>
            <label>Name</label>
            <input 

                    className="w-full p-2 focus:outline-myViolet border border-myViolet"
                value={name as string}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label>Address</label>
            <input 
                className="w-full p-2 focus:outline-myViolet border border-myViolet"
                value={address as string}
                onChange={(e) => setAddress(e.target.value)}
            />

        </div>
        <div>
            <label>Mobile</label>
            <input 
                className="w-full p-2 focus:outline-myViolet border border-myViolet"
                value={mobile as number}
                // @ts-ignore
                onChange={(e) => setMobile(e.target.value)}
            />

        </div>
        <div>
            <label>Email</label>
            <input 
                className="w-full p-2 focus:outline-myViolet border border-myViolet"
                value={email as string}
                onChange={(e) => setEmail(e.target.value)}
            />

        </div>
        <div className="mt-5">
            <Button 
                label='Edit' 
                onClick={() => handleUpdate(client?.id)}
                type="button"
                

            />
        </div>
            
        </div>
       

    </section>
  )
}

export default EditClient