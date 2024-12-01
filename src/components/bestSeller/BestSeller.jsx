import React, { useContext } from "react";
import Title from "../Title"; // Component to display section title
import { ShopContext } from "../../context/ShopContext"; // Context to access global product and currency data
import Item from "../item/Item"; // Component for displaying individual product details
import { Link } from "react-router-dom"; // For navigation to product detail pages

/**
 * BestSeller Component
 * Displays a grid of best-selling products from the ShopContext.
 */
function BestSeller() {
  // Accessing product and currency from ShopContext
  const { product, currency } = useContext(ShopContext);

  // Filter products to include only those marked as best sellers
  const bestSellers = product.filter((item) => item.bestSeller === true);

  return (
    <div className="mt-4 sm:ml-4 mb-10 ">
      {/* Title Component */}
      <div>
        <Title text1="Best" text2="Sellers" />
        <p className="w-full text-center text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          in.
        </p>
      </div>

      {/* Grid Layout for Best Seller Items */}
      <div className="grid grid-cols-2 gap-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
        {/* Check if there are best sellers available */}
        {bestSellers.length > 0 ? (
          bestSellers
            .slice(0, 10) // Limit to the first 10 items
            .map(({ id, images, name, ratings, price, sizes }) => (
              <Link key={id} to={`/product/${id}`}>
                {/* Render Item component with product details */}
                <Item
                  img={images[0] || "https://via.placeholder.com/150"} // Fallback image if no image is available
                  name={name} // Product name
                  rating={ratings?.averageRating || 0} // Default rating is 0 if not provided
                  price={price} // Product price
                  currency={currency} // Currency symbol
                  sizes={sizes} // Available sizes
                />
              </Link>
            ))
        ) : (
          // Display message if no best sellers are found
          <p className="text-center text-gray-500">No best sellers available</p>
        )}
      </div>
    </div>
  );
}

export default BestSeller;
