import prisma from "@/libs/prismaDB";
import getCurrentUser from "./getCurrentUser";

export async function getClients() {
    try {
        const currentUser = await getCurrentUser(); 

        if(!currentUser) {
            return null; 
        }

        const clients = await prisma.client.findMany({
            include: {
                lawyer: true,
                cases: true,
            }
        })

        return clients; 

    } catch(error: any) {
        console.log(error); 
        return null; 
    }
}

export async function getClientById(id: string) {
    try {
        const currentUser = await getCurrentUser(); 

        if(!currentUser) {
            return null; 
        }

        const client = await prisma.client.findUnique({
            where: {
                id: id,
            }
        }); 

        if(!client) {
            return null; 
        }

        return client; 

    }catch(error) {
        console.log(error); 
        return null; 
    }
}