import CasesTable from '@/components/Table/CasesTable';
import * as React from 'react';

interface ICasesPageProps {
}

const CasesPage: React.FunctionComponent<ICasesPageProps> = (props) => {
  return(
    <div>
        <CasesTable />
    </div>
  ) ;
};

export default CasesPage;
