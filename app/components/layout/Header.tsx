"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onAddMealClick: () => void;
}

export default function Header({ onAddMealClick }: HeaderProps) {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png" // Replace with actual logo path
          alt="FoodWagen Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <span className="text-xl font-bold text-orange-500">
          Food<span className="text-yellow-400">Wagen</span>
        </span>
      </div>

      {/* Right: Add Meal Button */}
      <button
        onClick={onAddMealClick}
        className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-md text-sm shadow-md transition duration-300"
      >
        Add Meal
      </button>
    </header>
  );
}
