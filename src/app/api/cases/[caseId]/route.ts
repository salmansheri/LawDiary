import { NextResponse } from "next/server";
import prisma from "@/libs/prismaDB";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
  caseId: string;
}

export async function PATCH(request: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("UnAuthorized", {
        status: 401,
      });
    }

    const body = await request.json();

    const {
      registerNumber,
      cnrNumber,
      caseName,
      clientId,
      courtName,
      courtPlace,
      oppositeAdvocate,
      oppositeParty,
      description,
      date,
      hearingDate,
      clientName,
    } = body;

    const updatedCases = await prisma.case.update({
      where: {
        id: params.caseId,
      },
      data: {
        regno: registerNumber,
        cnrNo: cnrNumber,
        caseName,
       
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

    return NextResponse.json(updatedCases, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const deletedCase = await prisma.case.delete({
      where: {
        id: params.caseId,
      },
    });

    return NextResponse.json(deletedCase, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
