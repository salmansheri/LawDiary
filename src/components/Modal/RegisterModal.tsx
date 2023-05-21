"use client";

import React, { useState } from "react";
import Input from "../inputs/Input";
import Modal from "./Modal";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const [image, setImage] = useState("");
  const registerModal = useRegisterModal();
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      image: "",
    },
  });

  const changeBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => [reject(error)];
    });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = e.target.files[0];
    const base64 = await changeBase64(file);
    // @ts-ignore
    setImage(base64);
    setValue("image", image);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    axios.post("/api/users", data).then(() => {
      toast.success("Sucessfully Registered");
    }).catch((error) => {
      console.log(error); 
      toast.error("Something went Wrong")
    }).finally(() => {
      setIsloading(false); 
    })
  };

  const bodyContent = (
    <div className="mb-5">
      <Input
        type="text"
        id="name"
        register={register}
        placeholder="Enter your Name"
        label="Name"
      />
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
        placeholder="Enter your password"
        label="Password"
      />
      {/* <div className="flex flex-row justify-between items-center">
        <label>Your Photo</label>

        <input type="file" onChange={(e) => handleUpload(e)} />
      </div> */}
    </div>
  );

  const footerContent = <div className=""></div>;
  return (
    <Modal
      body={bodyContent}
      footer={footerContent}
      isOpen={registerModal.isOpen}
      title="Register"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={isLoading ? "Loading..." : "Register"}
    />
  );
};

export default RegisterModal;
