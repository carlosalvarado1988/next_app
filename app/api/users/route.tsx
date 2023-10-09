import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // Note: evne if not use request: NextRequest, we add it because if not, Nextjs caches the data
  return NextResponse.json([
    {
      id: 1,
      name: "Carlos",
    },
    {
      id: 2,
      name: "Ariel",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // handling an error, expecting name
  //   if (!body?.name) return NextResponse.json({ error: "Name is required" });
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  // if error is found, this is the structure:
  //   {
  //     "error": [
  //         {
  //             "code": "too_small",
  //             "minimum": 3,
  //             "type": "string",
  //             "inclusive": true,
  //             "exact": false,
  //             "message": "String must contain at least 3 character(s)",
  //             "path": [
  //                 "name"
  //             ]
  //         }
  //     ]
  // }

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
