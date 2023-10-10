import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";
import bcrypt from "bcrypt";

import { reportError, findUserByEmail } from "../utils";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

interface User {
  email: string;
  hashedPassword: string;
}
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) return reportError(validation.error.errors, 400);

  const user = await findUserByEmail(body.email);
  if (user) return reportError("User already exists", 400);

  // we want to hash the password
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });
  return NextResponse.json({ email: newUser.email });
}
