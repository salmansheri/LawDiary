"use client";

import React, { useState } from "react";
import Input from "../inputs/Input";
import Modal from "./Modal";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn } from 'next-auth/react'; 
import { toast } from 'react-hot-toast'; 

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true); 
    signIn('credentials', {
      ...data
    }).then((callback) => {
      if(callback?.ok) {
        toast.success("Successfully Logged In")
      }
    }).catch((error) => {
      toast.error("Something Went Wrong")
    }).finally(() => {
      setIsloading(false); 
    })

  };
  const bodyContent = (
    <div>
      <Input
        type="email"
        id="email"
        register={register}
        placeholder="Enter your Email"
        label="Email"
      />
      <Input
        id="password"
        register={register}
        placeholder="Enter your Email"
        label="Password"
        type="password"
      />
    </div>
  );

  const footerContent = <div className=""></div>;
  return (
    <Modal
      body={bodyContent}
      footer={footerContent}
      isOpen={loginModal.isOpen}
      title="Login"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Login"
    />
  );
};

export default LoginModal;
