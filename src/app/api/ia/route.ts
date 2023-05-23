import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prismaDB";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const body = await request.json();

    const { iaStatus, iaTitle, caseId } = body;

    const newIa = await prisma.iA.create({
      data: {
        iaStatus,
        iaTitle,
        caseId,
      },
    });

    return NextResponse.json(newIa, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
