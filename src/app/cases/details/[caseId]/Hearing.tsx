"use client";

import Button from "@/components/Button";
import { Hearing } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'; 

interface HearingProps {
  hearings: Hearing[] | null | undefined;
  caseId: string;
}

const Hearing: React.FC<HearingProps> = ({ hearings, caseId }) => {

  const router = useRouter(); 
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      caseId: caseId,
      nextHearing: "",
    },
  });

  const onClick: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post(`/api/hearings/${caseId}`, data)
      .then(() => {
        toast.success("Successfully Updated Hearing Date");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Someting Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="glassmorphism">
      <div>
        <label className="mb-1 text-lg">Add Next Hearing Date:</label>
        <input
          className="w-full p-2 border border-myViolet focus:outline-myViolet"
          type="date"
          {...register("nextHearing")}
        />
        <div className="mt-3">
          <Button
            label={isLoading ? "Loading..." : "Add"}
            onClick={handleSubmit(onClick)}
          />
        </div>
      </div>

      <div>
        <h1 className="mt-3 text-3xl font-bold">All hearings</h1>
        <table className="table mt-5 w-full">
          <thead className="bg-myViolet text-white">
            <tr>
              <th>S.No</th>
              <th>Hearing Dates</th>
            </tr>

          </thead>
          <tbody>
            {hearings?.map((hear, index) => (
              
            <tr key={hear?.id}>
              <td>{index+ 1}</td>
              <td>{hear?.nextHearing}</td>

            </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Hearing;
