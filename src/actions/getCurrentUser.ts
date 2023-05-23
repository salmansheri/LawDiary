import prisma from "@/libs/prismaDB";
import { getServerSession } from 'next-auth/next'; 
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function getCurrentUser() {
    try {
        const session = await getServerSession(authOptions); 

        if(!session?.user?.email) {
            return null; 
        }
       

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email,
            },
            include: {
                clients: {
                    include: {
                        cases: true
                    }
                },
                cases: {
                    include: {
                        lawyer: true,
                        client: true,
                    }
                },
            }
        }); 

        return currentUser; 


    } catch(error: any) {

    }
}