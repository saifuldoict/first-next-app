"use client";

import React, { useState } from "react";

// Example card data
const cards = [
  {
    id: 1,
    title: "Product 1",
    description: "This is a short description of product 1.",
    price: "$25",
    image: "https://thispersondoesnotexist.com/image", // Face API example
  },
  {
    id: 2,
    title: "Product 2",
    description: "This is a short description of product 2.",
    price: "$40",
    image: "https://thispersondoesnotexist.com/image",
  },
  {
    id: 3,
    title: "Product 3",
    description: "This is a short description of product 3.",
    price: "$30",
    image: "https://thispersondoesnotexist.com/image",
  },
  {
    id: 4,
    title: "Product 4",
    description: "This is a short description of product 4.",
    price: "$50",
    image: "https://thispersondoesnotexist.com/image",
  },
  {
    id: 5,
    title: "Product 5",
    description: "This is a short description of product 5.",
    price: "$35",
    image: "https://thispersondoesnotexist.com/image",
  },
  {
    id: 6,
    title: "Product 6",
    description: "This is a short description of product 6.",
    price: "$20",
    image: "https://thispersondoesnotexist.com/image",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Filter cards (UI only, no backend)
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? card.category === category : true)
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page title + description */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Our Products</h1>
        <p className="text-gray-600">
          Browse our collection of amazing products and find what suits you best.
        </p>
      </div>

      {/* Search bar + optional category filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {card.description}
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="font-bold">{card.price}</span>
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
