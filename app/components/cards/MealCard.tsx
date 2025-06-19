"use client";

import Image from "next/image";

interface MealCardProps {
  name: string;
  price: string;
  rating: number;
  status: string | "Open" | "Closed";
  img: string;
  vendor: string;
}

export default function MealCard({
  name,
  price,
  rating,
  status,
  img,
  vendor,
}: MealCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 w-full max-w-xs mx-auto">
      <div className="relative">
        <Image
          src={img}
          alt={name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {price}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold mr-2">{vendor}</span>
            <span className="text-yellow-500 text-sm">★ {rating}</span>
          </div>
          <span className="text-sm">⋮</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <span
          className={`inline-block px-2 py-1 rounded-full text-sm ${
            status === "Open"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
