import { getClientById } from "@/actions/getClients";
import EditClient from "./EditClient";

interface IParams {
    clientId?: string; 
}

export default async function EditClientPage({params}: { params: IParams}) {
    const { clientId }  = params; 
    const client = await getClientById(clientId as string); 
    

    return(
        <div>
            <EditClient 
                client={client}
            />
        </div>
    )
}