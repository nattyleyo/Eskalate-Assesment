"use client";

import { useEffect, useState } from "react";
import MealCard from "../cards/MealCard";
import { getFeaturedRestaurants } from "@/Services/Api/mealService";
import ShimmerCard from "../cards/ShimmerCard";

export interface Meal {
  id: string;
  createdAt: string;
  name: string;
  avatar: string; // Note: Corrected from "avator" to "avatar" (matches API)
  rating: string; // API returns string for rating
  open: boolean;
  logo: string;
  Price: string; // Added Price field
}

export default function FeaturedMeals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const data: any = await getFeaturedRestaurants();
        setMeals(data);
        console.log("Fetched meals:", data);
      } catch (err) {
        setError("Failed to load meals. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 bg-gray-50 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ShimmerCard key={`shimmer-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 bg-gray-50 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Featured Meals
      </h2>

      {meals.length === 0 ? (
        <p className="text-center">No meals available</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
              Load more
            </button>
          </div>
        </>
      )}
    </div>
  );
}
