import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ItemsCard = ({ product }) => {
  return (
    <div className="  w-full rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition p-4">
      {/* Image */}
      <div className="relative  h-[250px] w-full">
        <Image
          src={product?.image}
          alt={product?.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      {/* Content */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-1">{product?.title}</h2>
        <p className="text-sm text-gray-600 mb-3">⭐ {product?.rating}</p>
      </div>
      <div className=' w-full'>
        <Link
         href={`/items/${product._id}`}
        className=" btn w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
        View Details
      </Link>
      </div>
    </div>
  );
};

export default ItemsCard;