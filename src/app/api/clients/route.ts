import { NextResponse } from "next/server";
import prisma from "@/libs/prismaDB";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }
    const body = await request.json();

    const { clientName, address, email, mobile } = body;

    if (!clientName || !address || !email || !mobile) {
      return null;
    }

    const client = await prisma.client.create({
      data: {
        lawyerId: currentUser?.id,
        clientName,
        address,
        email,
        mobile: parseInt(mobile, 10)
      },
    });

    return NextResponse.json(client, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
