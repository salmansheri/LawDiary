"use client";

import { AiFillEdit, AiFillDelete, AiFillFileAdd } from "react-icons/ai";
import Table from "./Table";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";

import Search from "../search/Search";
import axios from "axios";
import { toast } from "react-hot-toast";
// import { error } from "console";

interface ClientsTableProps {
  clients: Array<any> | null;
  isProfile?: boolean;
}

const ClientsTable: React.FC<ClientsTableProps> = ({ clients, isProfile }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");

  const handleDelete = useCallback(
    (id: any) => {
      axios
        .delete(`/api/clients/${id}`)
        .then(() => {
          toast.success("Deleted Successfully");
          router.refresh();
        })
        .catch((error: any) => {
          toast.error("Something Went Wrong");
        });
    },
    [router]
  );

  const TableHeadContent = (
    <>
      <thead className="">
        <tr className="bg-myViolet text-white">
          <th>S.No</th>
          <th>Client Name</th>
          <th>Address</th>
          <th>Mobile Number</th>
          <th>Email</th>
          {isProfile && (
            <>
              <th>Add Cases</th>
              <th>Edit clients</th>
              <th>Remove Clients</th>
            </>
          )}
        </tr>
      </thead>
    </>
  );

  const TableBodyContent = (
    <tbody>
      {/* row 1 */}
      {/* @ts-ignore  */}
      {clients
        ?.filter(
          (myClient) =>
            myClient.clientName
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            myClient.email.toLowerCase().includes(searchText.toLowerCase()) ||
            myClient.mobile.toString().includes(searchText.toLowerCase()) ||
            myClient.address.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((myClient: Record<string, any>, index: number) => (
          <tr key={myClient?.id}>
            <th>{index + 1}</th>
            <td>{myClient.clientName}</td>
            <td>{myClient.address}</td>
            <td>{myClient.mobile}</td>
            <td>{myClient.email}</td>
            {isProfile && (
              <>
               <td>
              <button onClick={() => router.push(`/cases/add/${myClient?.id}`)}>
                <AiFillFileAdd color="green" size={20} />
              </button>
            </td>

            <td>
              <button
                onClick={() => router.push(`/clients/edit/${myClient?.id}`)}
              >
                <AiFillEdit className="text-myViolet" size={20} />
              </button>
            </td>
            <td>
              <button onClick={() => handleDelete(myClient.id)}>
                <AiFillDelete color="red" size={20} />
              </button>
            </td>
              
              </>
            )}
           
          </tr>
        ))}
    </tbody>
  );
  return (
    <div>
      <>
        <div className="flex flex-col lg:flex-row justify-between">
          <Search
            searchText={searchText}
            // @ts-ignore
            setSearchText={setSearchText}
          />
          <div className="w-[30%]">
            <Button
              label="Add Clients"
              addBtn
              onClick={() => router.push("/clients/add")}
            />
          </div>
        </div>
        <Table
          title="All Clients"
          subTitle="Add Your clients and Their Cases"
          tableBody={TableBodyContent}
          tableHead={TableHeadContent}
        />
      </>
    </div>
  );
};

export default ClientsTable;
