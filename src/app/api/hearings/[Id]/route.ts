import { NextResponse } from 'next/server'; 

import getCurrentUser from '@/actions/getCurrentUser';
import prisma from '@/libs/prismaDB';

interface IParams {
    Id: string; 
}

export async function POST(request: Request, {params}: { params: IParams }) {
    try {
        const { Id } = params; 
        const currentUser = await getCurrentUser(); 

        if(!currentUser) {
            return new NextResponse("Unauthorized", {
                status: 401,
            })
        }

        const body = await request.json(); 

        const { 
            nextHearing, 
            caseId,
        } = body; 

        const updatedHearingInCase = await prisma.case.update({
            where: {
                id: caseId,
            },
            data: {
                hearingDate: nextHearing,
            }
        })

        const newHearing = await prisma.hearing.create({
            data: {
                caseId,
                nextHearing,
            }
        }); 

        return NextResponse.json(newHearing, {
            status: 200,
        })

    } catch(error: any) {
        console.log(error); 
        return new NextResponse("Internal Server Error", {
            status: 500,
        })
    }
}