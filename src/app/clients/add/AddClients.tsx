'use client'; 

import Button from '@/components/Button';
import Input from '@/components/inputs/Input';
import axios from 'axios';
import React, { useState } from 'react'; 
import { useForm, FieldValues, SubmitHandler} from 'react-hook-form' 
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'; 

const AddClients = () => {
    const router = useRouter(); 
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }

    } = useForm<FieldValues>({
        defaultValues: {
            clientName: "",
            address: "",
            mobile: "",
            email: "",

        }
    }); 

    const onClick: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true); 
        axios.post("/api/clients", data)
            .then(() => {
                toast.success("Clients Added Successfully")
                router.push("/profile")
            })
            .catch((error: any) => {
                toast.error("Something Went Wrong")
            })
            .finally(() => {
                setIsLoading(false); 
            })
    }


  return (
    <div>
        <div>
            <h1>Add Your Clients Here</h1>
        </div>
        <div>
            <Input id="clientName" label='Client Name' disabled={isLoading} 
                register={register}
                placeholder='Enter Client Name'
                type="text"
                
            />
            <Input id="address" label='Address' disabled={isLoading} 
                register={register}
                placeholder='Enter address'
                type="text"
                
            />
            <Input id="mobile" label='Mobile' disabled={isLoading} 
                register={register}
                placeholder='Enter Mobile Number'
                type='number'
                
            />
            <Input id="email" label='Email' disabled={isLoading} 
                register={register}
                placeholder='Enter Email'
                
            />
            <div>
                <Button 
                label="Add" 
                type="button"
                onClick={handleSubmit(onClick)}
                
                />
            </div>
        </div>
    </div>
  )
}

export default AddClients