"use client";

import Image from "next/image";
import { FaMotorcycle, FaLock } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="bg-orange-400 min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20 gap-10">
      {/* Left Section */}
      <div className="text-white max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Are you starving?
        </h1>
        <p className="text-sm md:text-base text-white/90 mb-6">
          Within a few clicks, find meals that are accessible near you
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-md w-full max-w-xl p-4 space-y-4">
          {/* Toggle Buttons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-500 text-sm font-medium rounded">
              <FaMotorcycle />
              <span>Delivery</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-500 text-sm font-medium rounded">
              <FaLock />
              <span>Pickup</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="flex mt-2">
            <div className="relative flex-grow">
              <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What do you like to eat today?"
                className="w-full py-2 pl-10 pr-4 rounded-l-md bg-gray-100 text-sm focus:outline-none"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 text-sm text-white font-semibold rounded-r-md transition">
              Find Meal
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="max-w-xs md:max-w-sm">
        <Image
          src="/noodles.png" // Place your image in the `public/` folder
          alt="Bowl of noodles"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
