'use client'; 

import Button from '@/components/Button';
import Input from '@/components/inputs/Input'
import { watch } from 'fs';
import React, { useState } from 'react'; 
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'; 

const AddCases = () => {
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
            registerNumber: 0,
            cnrNumber:0,
            clientName: "",
            caseName: "",
            date: "",
            hearingDate: "",
            IA: [],
            oppositeParty: "",
            oppositeAdvocate: "",
            caseDescription: "",
        }
    }); 

    const onClick: SubmitHandler<FieldValues> = (data) => {
        console.log(data); 

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
            type="number"
            errors={errors}
            label="Register Number:"
            disabled={isLoading}



        />
        <Input 
            placeholder="Enter Date"
            id="registerNumber"
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
           
            type="number"
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
            placeholder="Enter Register No"
            id="registerNumber"
            register={register}
           
            type="number"
            errors={errors}
            label="Register Number:"
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
            placeholder="Enter Register No"
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
            {...register("caseDescription")}   
          
            
           
            disabled={isLoading}



        />
        </div>

        <Button 
            label="Add Cases"
            type="button"
            onClick={handleSubmit(onClick)}
        />
    </div>
  )
}

export default AddCases