import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";

import { authOptions } from "../../api/auth/[...nextauth]/route";
import ProductCard from "../../componenets/ProductCard";
import { Metadata } from "next";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = async ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className="font-bold text-3xl">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>
      <div className="mb-3">
        <ul>
          <li>
            <Link className="btn btn-accent mb-3" href="/users">
              /users - Link element
            </Link>
          </li>
          <li>
            <a href="/users" className="btn btn-neutral">
              /users - Archor (non performant)
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <ProductCard />
      </div>

      <div>
        <h4> Testing catch-all </h4>

        <Link
          className="btn btn-accent mb-3"
          href="/products/sales/location/toroton/two?sortOrder=top"
        >
          [[...slug]]: /products/sales/location/toroton/two?sortOrder=top
        </Link>
        <p>Slug: {slug}</p>
        <p>sortOrder: {sortOrder}</p>
      </div>
    </main>
  );
};

export default ProductPage;

export const metadata: Metadata = {
  title: "Products playground page",
  description: "a page to test nextjs capabilities",
};
