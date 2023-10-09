import { NextResponse } from "next/server";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

export * from "./users";
export * from "./products";

export function reportError(error: any, status: number) {
  let message = "Unknown Error";
  if (typeof error === "string") message = error;
  if (error instanceof Error) message = error.message;
  if (error instanceof PrismaClientValidationError)
    message = error.message || error.name;
  if (typeof error === "object") message = error[0]?.message;
  return NextResponse.json({ error: message }, { status });
}
