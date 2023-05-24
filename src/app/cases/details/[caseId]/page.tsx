import { getCasesById } from "@/actions/getCases";
import CaseDetails from "./CaseDetails";
import LawyerDetails from "./LawyerDetails";
import ClientDetails from "./ClientDetails";
import IADetails from "./IADetails";
import Hearing from "./Hearing";

interface IParams {
  caseId: string;
}

export default async function CaseDetailsPage({ params }: { params: IParams }) {
  const { caseId } = params;
  const courtCase = await getCasesById(caseId);
  return (
    <section className="pb-48">

     <CaseDetails courtCase={courtCase} />
     <LawyerDetails
        lawyer={courtCase?.lawyer} 

     />
     <ClientDetails 
        client={courtCase?.client}
     />

<IADetails 
      // @ts-ignore
      IA={courtCase?.IA}
      caseId={courtCase?.id}
    />

    <Hearing 
      hearings={courtCase?.hearings}
      caseId={caseId}
      />
    </section>
  );
}
