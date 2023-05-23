import ClientsTable from '@/components/Table/ClientsTable';
import * as React from 'react';
import { getClients } from '@/actions/getClients';


export const revalidate = 30; 

// @ts-expect-error async Server component
const ClientsPage = async (props) => {
  const clients = await getClients(); 
  return(
    <div>
      <ClientsTable clients={clients} />
        
    </div>
  ) ;
};

export default ClientsPage;
