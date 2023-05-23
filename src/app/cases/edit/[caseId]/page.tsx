import { getCasesById } from "@/actions/getCases";
import EditCase from "./EditCase";


interface IParams {
    caseId?: string; 
}

export default async function EditCasePage({
    params
}: {
    params: IParams,
}) {
    const { caseId} = params; 
    const courtCase: Record<string, any> | null = await getCasesById(caseId as string); 
    
    return(
        <div>
            <EditCase 
                courtCase={courtCase}
            />
        </div>
    )
}