import { NextResponse } from "next/server";
import prisma from "@/libs/prismaDB";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const body = await request.json();

    const {
      registerNumber,
      cnrNumber,
      date,
      hearingDate,
      clientName,
      clientId,
      caseName,
      courtName,
      courtPlace,
      oppositeParty,
      oppositeAdvocate,
      description,
    } = body;

    const newCase = await prisma.case.create({
      data: {
        regno:registerNumber,
        cnrNo: cnrNumber,
        caseName,
        lawyerId: currentUser?.id,
        clientId,
        courtName,
        courtPlace,
        oppositeAdvocate,
        oppositeParty,
        description,
        date,
        hearingDate,
        clientName,
      },
    });

    return NextResponse.json(newCase, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
