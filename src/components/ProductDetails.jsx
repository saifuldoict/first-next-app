"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Example product data (in a real app, fetch dynamically)
const product = {
  id: 1,
  title: "Product 1",
  fullDescription:
    "This is the full description of Product 1. It contains all the details about the product including features, specifications, and any other relevant information that might be useful to the user.",
  price: "$25",
  date: "2025-11-24",
  priority: "High",
  image: "https://thispersondoesnotexist.com/image",
};

const ProductDetails = () => {
  const router = useRouter();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        &larr; Back
      </button>

      {/* Large image/banner */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      {/* Product title */}
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

      {/* Full description */}
      <p className="text-gray-700 mb-6">{product.fullDescription}</p>

      {/* Meta info */}
      <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
        <span>
          <strong>Price:</strong> {product.price}
        </span>
        <span>
          <strong>Date:</strong> {product.date}
        </span>
        <span>
          <strong>Priority:</strong> {product.priority}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
