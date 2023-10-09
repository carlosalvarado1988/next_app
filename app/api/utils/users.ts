import prisma from "@/prisma/client";

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
