import getCurrentUser from "@/actions/getCurrentUser"
import CasesTable from "@/components/Table/CasesTable";
import ClientsTable from "@/components/Table/ClientsTable";
import { format } from "date-fns";

export default async function ProfilePage() {
    const currentUser = await getCurrentUser(); 
   
    return(
        <div>
            <div>
                <h1 className="text-gray-500 text-3xl font-bold">My Profile</h1>
            </div>

        <div className="glassmorphism flex flex-col gap-3">
            <div>
                <label>Advocate Name: </label>
                <span>{currentUser?.name}</span>
            </div>
            <div>
                <label>Advocate Name: </label>
                <span>{currentUser?.email}</span>
            </div>
            
            
        </div>
        <div className="my-5">
            <CasesTable 
                courtCases={currentUser?.cases}
                isProfile
            />
        </div>
        <div className="mb-10">
            <ClientsTable 
                // @ts-ignore
                clients={currentUser?.clients}
                isProfile
            />
        </div>
        </div>
    )
}