import { NextResponse } from "next/server";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import prisma from "@/prisma/client";

export function reportError(error: unknown, status: number) {
  let message = "Unknown Error";
  if (typeof error === "string") message = error;
  if (error instanceof Error) message = error.message;
  if (error instanceof PrismaClientValidationError) message = error.name;
  return NextResponse.json({ error: message }, { status });
}

export async function doesUserEmailExistsInDB(email: string) {
  if (!email) return null;
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
}

export async function findUserById(id: number) {
  if (!id) return null;
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
}
