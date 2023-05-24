"use client";

import Button from "@/components/Button";
import Table from "@/components/Table/Table";
import { IA } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "react-hot-toast";

interface IADetailsProps {
  IA: IA[] | null | undefined;
  caseId: string | null | undefined; 
}

const IADetails: React.FC<IADetailsProps> = ({ IA, caseId }) => {
    console.log(caseId)
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      iaTitle: "",
      iaStatus: "",
      caseId: caseId
    },
  });

  const onClick: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/ia", data)
      .then(() => {
        toast.success("Added IA Successfully");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went Wrong");
      });
  };
  const headerCentent = (
    <thead className="">
      <tr className="bg-myViolet text-white">
        <th>S.No</th>
        <th>IA Name</th>

        <th>IA Status</th>
      </tr>
    </thead>
  );

  const bodyContent = (
   
        <tbody>
      {IA?.map((ia, index) => (
        <>
            <tr>

          <th>{index + 1}</th>
          <td>{ia?.iaTitle}</td>
          <td>{ia?.iaStatus}</td>
            </tr>
        </>
      ))}
      </tbody>
    
  );
  return (
    <div className="glassmorphism  justify-between">
      <div className="flex flex-col gap-5">
        <div>
          <label>IA Status: </label>
          <input {...register('iaStatus', {required: true})} className="w-full p-2 border border-myViolet focus:outline-myViolet" />
        </div>
        <div>
          <label>IA Title: </label>
          <input {...register('iaTitle')} className="w-full p-2 border border-myViolet" />
        </div>
        <div className="w-[30%]">
          <Button
            label="Add IA"
            onClick={handleSubmit(onClick)}
            type="button"
          />
        </div>
      </div>
      <div className="mt-5">
        <Table
          title="IA"
          areaLabel="Add IA"
          tableBody={bodyContent}
          tableHead={headerCentent}
        />
      </div>
    </div>
  );
};

export default IADetails;
