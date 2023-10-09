import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import schema from "./schema";
import { reportError, doesUserEmailExistsInDB } from "../utils";

export async function GET(request: NextRequest) {
  // Note: eveen if not use request: NextRequest, we add it because if not, Nextjs caches the data
  const users = await prisma.user.findMany();
  if (!users) return reportError("No users found", 404);
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  //validate data
  const validation = schema.safeParse(body);
  if (!validation.success) return reportError(validation.error.errors, 400);

  // validate user exists with email
  const user = await doesUserEmailExistsInDB(body.email);
  if (user) return reportError("User already exists", 400);

  // create new user
  const newUser = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(newUser);
}
