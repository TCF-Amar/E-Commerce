import React from "react";
import Hero from "../components/Hero/Hero";
import LatestCollections from "../components/latestcollections/LatestCollections";
import BestSeller from "../components/bestSeller/BestSeller";
import Services from "../components/Services";

function Home() {
  return (
    <div className="pb-4">
      {/* Hero Section */}
      <Hero />

      {/* Latest Collections Section */}
      <LatestCollections />

      {/* Divider between sections */}
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Best Seller Section */}
      <BestSeller />

      <Services />
    </div>
  );
}

export default Home;
