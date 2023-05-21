import { NextResponse } from 'next/server'; 
import prisma from '@/libs/prismaDB';
import bcrypt from 'bcrypt'; 

export async function POST(request: Request) {
    try {
        const body = await request.json(); 

        const { 
            name,
            email,
            password,
            image

        } = body; 

        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt); 

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
                image

            }
        }); 

        return NextResponse.json(user, {
            status: 201,
        })

    } catch(error: any) {
        console.log(error); 
        return new NextResponse("Internal Error", {
            status: 500,
        })
    }
}