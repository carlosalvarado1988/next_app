import Image from "next/image";
import Link from "next/link";
import ProductCard from "./componenets/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">go users using Link element</Link>
      <br />
      <a href="/users">go users with anchor (non performant)</a>
      <ProductCard />
    </main>
  );
}
