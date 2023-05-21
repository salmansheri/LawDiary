'use client'; 

import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps {
    placeholder?: string; 
    type?: string; 
    onClick?: ()=> void; 
    register?: UseFormRegister<FieldValues>; 
    errors?: FieldErrors; 
    id: string; 
    disabled?: boolean; 
    label?: string; 
}

import React from 'react'

const Input:React.FC<InputProps> = ({
    id,
    type,
    onClick,
    register,
    errors,
    disabled,
    label,
    placeholder


}) => {
  return (
    <div className="lg:flex justify-between my-3">
        <label>{label}</label>
        <input 
            className="w-full lg:w-[70%] p-2 ring-myViolet border border-myViolet   focus:outline-myViolet" 
            placeholder={placeholder}
            
           
            id={id}
            // @ts-ignore
            {...register(id)}
            type={type}
            disabled={disabled}
        />
    </div>
  )
}

export default Input