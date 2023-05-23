import prisma from "@/libs/prismaDB";
import getCurrentUser from "./getCurrentUser";

export async function getCases() {
    try {
        const currentUser = await getCurrentUser(); 

        if(!currentUser) {
            return null; 
        }

        const courtCases = await prisma.case.findMany({
            include: {
                client: true,
                lawyer: true,
            }
        }); 

        if(!courtCases) {
            return null; 
        }

        return courtCases; 

    } catch(error){
        console.log(error); 
        return null; 
    }
}

export async function getCasesById(caseId: string) {
    try {
        const currentUser = await getCurrentUser(); 

        if(!currentUser) {
            return null; 
        }

        const courtCase = await prisma.case.findUnique({
            where: {
                id: caseId
            }, 
            include: {
                client: true,
                lawyer: true,
                IA: true,
                hearings: true,
            }
        }); 

        if(!courtCase) {
            return null; 
        }

        return courtCase; 

    } catch(error: any) {
        console.log(error); 
        return null; 

    }
}