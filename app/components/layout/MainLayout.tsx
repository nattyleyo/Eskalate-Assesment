import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../sections/Hero";
import CardContainer from "../sections/CardContainer";

export default function MainLayout() {
  return (
    <main className="flex-1 bg-gray-50">
      <Header />
      <Hero />
      <CardContainer />
      <Footer />
    </main>
  );
}
