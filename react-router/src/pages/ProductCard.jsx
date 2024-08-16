import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="m-4 flex h-80 w-64 flex-col justify-between overflow-hidden rounded shadow-lg">
      <img
        className="h-40 w-full object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-4 py-2">
        <div className="text-md mb-1 font-bold">{product.title}</div>
        <p className="truncate text-sm text-gray-700">{product.description}</p>
        <p className="font-bold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
