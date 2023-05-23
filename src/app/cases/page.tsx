import { getCases } from '@/actions/getCases';
import CasesTable from '@/components/Table/CasesTable';
import * as React from 'react';
import getCurrentUser from '@/actions/getCurrentUser';


// @ts-expect-error Async Server component
const CasesPage = async (props) => {
  const courtCases = await getCases(); 
  const currentUser = await getCurrentUser(); 

  return(
    <div>
        <CasesTable 
          courtCases={courtCases}  
          currentUser={currentUser}
         
          
          />
    </div>
  ) ;
};

export default CasesPage;
