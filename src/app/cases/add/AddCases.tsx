'use client'; 

import Button from '@/components/Button';
import Input from '@/components/inputs/Input'
import axios from 'axios';
// import { watch } from 'fs';
import React, { useState } from 'react'; 
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'; 
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'; 

interface AddCasesProps {
    clientId?: string; 
}

const AddCases: React.FC<AddCasesProps> = ({
    clientId
}) => {
    const router = useRouter(); 
    const [isLoading, setIsLoading] = useState(false); 
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
        watch,
        setValue
        
    } = useForm<FieldValues>({
        defaultValues:{
            registerNumber: "",
            cnrNumber:"",
            clientName: "",
            caseName: "",
            date: "",
            hearingDate: "",
            courtName: "",
            courtPlace: "",
            clientId: clientId,
           
            oppositeParty: "",
            oppositeAdvocate: "",
            description: "",
        }
    }); 

    const onClick: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true); 
        axios.post("/api/cases", data)
            .then(() => {
                toast.success("Successfully Added Cases"); 
                router.push("/profile"); 
                
            })
            .catch((error: any) => {
                console.log(error); 
                toast.error("Someting Went Wrong"); 
            })
            .finally(() => {
                setIsLoading(false); 
            })

    }


  return (
    <div className="glassmorphism my-10">
        <div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">Add Cases</h1>
            <p className="font-medium text-sm text-gray-400">Add Your Cases</p>
        </div>
        <Input 
            placeholder="Enter Register No"
            id="registerNumber"
            register={register}
            onClick={handleSubmit(onClick)}
            type="text"
            errors={errors}
            label="Register Number:"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Date"
            id="date"
            register={register}
            onClick={handleSubmit(onClick)}
            type="date"
            errors={errors}
            label="Date"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Hearing Date"
            id="hearingDate"
            register={register}
            onClick={handleSubmit(onClick)}
            type="date"
            errors={errors}
            label="Hearing Date"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter CNR No"
            id="cnrNumber"
            register={register}
           
            type="text"
            errors={errors}
            label="CNR No: "
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Client Name"
            id="clientName"
            register={register}
           
            type="text"
            errors={errors}
            label="Client Name"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Case Name..."
            id="caseName"
            register={register}
   
            type="text"
            errors={errors}
            label="Case Name"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Court Name..."
            id="courtName"
            register={register}
   
            type="text"
            errors={errors}
            label="Court Name"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Court Place"
            id="courtPlace"
            register={register}
   
            type="text"
            errors={errors}
            label="Court Place"
            disabled={isLoading}



        />
      
        <Input 
            placeholder="Enter Opposition Party"
            id="oppositeParty"
            register={register}
           
            type="text"
            errors={errors}
            label="Opposite Party"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Opposite Advocate"
            id="oppositeAdvocate"
            register={register}
            
            type="type"
            errors={errors}
            label="Opposite Advocate"
            disabled={isLoading}



        />
        <div className='flex flex-row items-center justify-between mt-2 mb-8'>
            <label>Case Description</label>
        <textarea className="w-[70%] p-2 border border-myViolet focus:outline-myViolet"
            placeholder="Enter Register No"
            id="registerNumber"
            {...register("description")}   
          
            
           
            disabled={isLoading}



        />
        </div>

        <Button 
            label={isLoading ? "Loading...": "Add"}
            type="button"
            onClick={handleSubmit(onClick)}
        />
    </div>
  )
}

export default AddCases