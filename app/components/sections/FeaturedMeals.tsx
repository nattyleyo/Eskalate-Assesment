"use client";

import MealCard from "../cards/MealCard";
export default function FeaturedMeals() {
  const meals = [
    {
      id: 1,
      name: "Bow Lasagna",
      price: "$2.99",
      rating: 4,
      status: "Closed", // Explicitly "Closed" or "Open"
      img: "/path/to/bow-lasagna.jpg",
      vendor: "Pasta",
    },
    {
      id: 2,
      name: "Mixed Avocado Srv",
      price: "$5.99",
      rating: 4.4,
      status: "Closed", // Explicitly "Closed" or "Open"
      img: "/path/to/avocado.jpg",
      vendor: "Pizza",
    },
    {
      id: 3,
      name: "Pancake",
      price: "$3.99",
      rating: 4.5,
      status: "Open", // Explicitly "Closed" or "Open"
      img: "/path/to/pancake.jpg",
      vendor: "Dunkin",
    },
    {
      id: 4,
      name: "Cupcake",
      price: "$1.99",
      rating: 4.2,
      status: "Open", // Explicitly "Closed" or "Open"
      img: "/path/to/cupcake.jpg",
      vendor: "Subway",
    },
    {
      id: 5,
      name: "Creamy Stake",
      price: "$12.99",
      rating: 4.3,
      status: "Open", // Explicitly "Closed" or "Open"
      img: "/path/to/creamy-steak.jpg",
      vendor: "Ruby",
    },
    {
      id: 6,
      name: "Stake with Potatoes",
      price: "$9.99",
      rating: 5,
      status: "Open", // Explicitly "Closed" or "Open"
      img: "/path/to/stake-potatoes.jpg",
      vendor: "KFC",
    },
    {
      id: 7,
      name: "Indian Spicy Soup",
      price: "$6.99",
      rating: 4.5,
      status: "Open", // Explicitly "Closed" or "Open"
      img: "/path/to/spicy-soup.jpg",
      vendor: "Coca",
    },
    {
      id: 8,
      name: "Stake Omelet",
      price: "$11.99",
      rating: 4.8,
      status: "Open", // Explicitly "Closed" or "Open"
      img: "/path/to/omelet.jpg",
      vendor: "BKC",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Meals</h2>
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
    </div>
  );
}
