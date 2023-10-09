import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import productSchema from "./schema";
import { reportError } from "../utils";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = productSchema.safeParse(body);

    if (!validation.success) return reportError(validation.error.errors, 400);
    // return NextResponse.json(
    //   { error: validation.error.errors },
    //   { status: 400 }
    // );
    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
      },
    });
    return NextResponse.json(newProduct);
  } catch (e) {
    return reportError(e, 500);
  }
}
