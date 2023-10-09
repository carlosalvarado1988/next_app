import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      <p>
        catching-all params using [[...slug]] testing:
        http://localhost:3000/products/sales/location/toroton/two?sortOrder=top:
      </p>
      {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
