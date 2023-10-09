import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

import { reportError, findUserById } from "../../utils";

interface GetProps {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: GetProps) {
  try {
    // fetch data from db\
    const user = await findUserById(parseInt(params.id));
    if (!user) return reportError("User not found", 404);
    return NextResponse.json(user);
  } catch (e: unknown) {
    return reportError(e, 500);
  }
}

interface PutProps extends GetProps {
  name: string;
}

// we can use PUT or PATCH methods, technically, PUT is to replace the entire object, PATCH is to update some keys only
export async function PUT(request: NextRequest, { params }: PutProps) {
  try {
    // validate params && request.body
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success)
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );

    // validate user exists in db
    const user = await findUserById(parseInt(params.id));
    if (!user) return reportError("User not found", 404);

    // Update the user in db
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        name: body.name,
        email: body.email,
      },
    });

    // return updated user
    return NextResponse.json(updatedUser);
  } catch (e: unknown) {
    return reportError(e, 500);
  }
}

export async function DELETE(request: NextRequest, { params }: GetProps) {
  try {
    // fetch user from db
    const user = await findUserById(parseInt(params.id));
    if (!user) return reportError("User not found", 404);

    // delete user from db
    await prisma.user.delete({ where: { id: user.id } });

    // default to status 200
    return NextResponse.json({});
  } catch (e) {
    return reportError(e, 500);
  }
}
