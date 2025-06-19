"use client";

import Image from "next/image";
import { Meal } from "../sections/FeaturedMeals";

export default function MealCard({
  id,
  name,
  avatar,
  rating,
  open,
  logo,
  Price,
}: Meal) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 w-full max-w-xs mx-auto">
      <div className="relative">
        <img
          src={logo} // Changed from img to avatar
          alt={name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
          ${Price}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold mr-2">
              <img
                src={logo} // Changed from vendor to logo
                alt="Vendor logo"
                width={24}
                height={24}
                className="rounded-full"
              />
            </span>
            <span className="text-yellow-500 text-sm">★ {rating}</span>
          </div>
          <span className="text-sm">⋮</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <span
          className={`inline-block px-2 py-1 rounded-full text-sm ${
            open // Changed from status string to boolean open
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {open ? "Open" : "Closed"}
        </span>
      </div>
    </div>
  );
}
