import React, { useContext } from "react";
import Title from "../Title"; // Import the Title component for displaying the section title
import { ShopContext } from "../../context/ShopContext"; // Import ShopContext to access global state
import Item from "../item/Item"; // Import Item component for displaying individual product details
import { Link } from "react-router-dom"; // Import Link for navigation to product detail pages

/**
 * LatestCollections Component
 * Displays the latest products from the ShopContext in a grid layout.
 */
function LatestCollections() {
  // Destructure product and currency from ShopContext
  const { product, currency } = useContext(ShopContext);

  return (
    <div className="mt-4 sm:ml-4 mb-10">
      {/* Section Title */}
      <Title text1="Latest" text2="Collections" />
      <p className="w-full text-center text-sm text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        dolore voluptate quaerat! Asperiores, mollitia. Consectetur.
      </p>

      {/* Grid Layout for Products */}
      <div className="grid grid-cols-2 gap-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
        {/* Map through the first 10 products and render them as links */}
        {product.slice(0, 10).map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            {/* Render Item component with product details */}
            <Item
              img={product.images[0]} // Display the first image of the product
              name={product.name} // Display the product name
              rating={product.ratings.averageRating} // Display the average rating
              price={product.price} // Display the product price
              currency={currency} // Display the currency symbol
              sizes={product.sizes} // Display the available sizes
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
