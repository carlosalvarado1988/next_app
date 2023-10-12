"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => alert("button click handler")}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
