import prisma from "@/prisma/client";

export async function findProductById(id: number) {
  if (!id) return null;
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
}
