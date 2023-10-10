import Link from "next/link";
import ProductCard from "./componenets/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">go users using Link element</Link>
      <br />
      <a href="/users">go users with anchor (non performant)</a>
      <ProductCard />
    </main>
  );
}
