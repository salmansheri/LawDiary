import { NextResponse } from "next/server";
import prisma from "@/libs/prismaDB";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
  clientId?: string;
}

export async function PATCH(request: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const body = await request.json();
    const { clientName, address, email, mobile } = body;

    const updatedClient = await prisma.client.update({
      where: {
        id: params.clientId,
      },
      data: {
        clientName,
        address,
        email,
        mobile: parseInt(mobile, 10),
      },
    });

    return NextResponse.json(updatedClient, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new Response("Internal Error", {
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

    const deletedClient = await prisma.client.delete({
      where: {
        id: params.clientId,
      },
    });

    return NextResponse.json(deletedClient, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Cannot Delete Client", {
      status: 500,
    });
  }
}
