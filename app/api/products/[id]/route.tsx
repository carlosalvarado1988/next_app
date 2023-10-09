import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

interface GetProps {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: GetProps) {
  // fetch data from db
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({
    id: 1,
    name: "Milk",
    price: 2.5,
  });
}

interface PutProps extends GetProps {
  name: string;
  price: number;
}

export async function PUT(request: NextRequest, { params }: PutProps) {
  // validate params && request.body
  const body = await request.json();
  const { id } = params;

  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  // Fetch product with given id -- simulate call to db

  // -> if product does not exists, return 404 status, not found
  if (id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  // Update the product -- simulate update call to db

  // return updated product
  return NextResponse.json({ id, name: body.name, price: body.price });
}

export async function DELETE(request: NextRequest, { params }: GetProps) {
  const { id } = params;
  // fetch product from db
  // -> if product does not exists, return 404 status, not found
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  // Delete the product --> simulated
  // return 200 response
  return NextResponse.json({}); // default to status 200
}
