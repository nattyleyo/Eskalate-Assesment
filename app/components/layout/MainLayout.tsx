"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../sections/Hero";
import CardContainer from "../sections/FeaturedMeals";
import MealAdd from "../modals/MealAdd";
import FeaturedMeals from "../sections/FeaturedMeals";

export default function MainLayout() {
  const [showModal, setShowModal] = useState(false);

  const handleAddMealClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddMeal = (meal: {
    name: string;
    rating: number;
    img: string;
    vendor: string;
    logo: string;
    status: "open" | "close";
  }) => {
    console.log("Added meal:", meal);
    // Add your logic to handle the new meal
    setShowModal(false);
  };

  return (
    <main className="flex-1 bg-gray-50">
      <Header onAddMealClick={handleAddMealClick} />
      <Hero />
      <FeaturedMeals />
      {showModal && (
        <MealAdd onClose={handleModalClose} onAdd={handleAddMeal} />
      )}
      <Footer />
    </main>
  );
}
