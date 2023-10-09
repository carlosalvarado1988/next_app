import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface GetProps {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: GetProps) {
  // fetch data from db
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({
    id: 1,
    name: "Carlos",
  });
}

// updating an object in db using API
// we can use PUT or PATCH methods, technically, PUT is to replace the entire object, PATCH is to update some keys only
interface PutProps extends GetProps {
  name: string;
}

export async function PUT(request: NextRequest, { params }: PutProps) {
  // validate params && request.body
  const body = await request.json();
  const { id } = params;
  // -> if invalid, return 400 status
  // validate it must be a number
  //   if (typeof id !== "number") --> intereting, even 1 comes as a number, it needs more robust validation
  //     return NextResponse.json(
  //       { error: "Id is required as a number" },
  //       { status: 400 }
  //     );

  // if (!body.name) --> vanilla js validation, now we use a library zod
  //   return NextResponse.json({ error: "Name is required" }, { status: 400 });
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  // Fetch user with given id -- simulate call to db

  // -> if user does not exists, return 404 status, not found
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Update the user -- simulate update call to db

  // return updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params }: GetProps) {
  const { id } = params;
  // fetch user from db
  // -> if user does not exists, return 404 status, not found
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user --> simulated
  // return 200 response
  return NextResponse.json({}); // default to status 200
}
