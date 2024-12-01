import React from "react";
import SmallScreenHeader from "./SmallScreenHeader"; // Header component optimized for small screens
import LargeScreenHeader from "./LargeScreenHeader"; // Header component optimized for large screens

/**
 * Header Component
 * Combines headers for both small and large screen sizes.
 * This component ensures responsive design by rendering different headers based on the screen size.
 */
function Header() {
  return (
    <div className="w-full fixed  z-[10] top-0 left-0">
      {/* SmallScreenHeader: Renders header optimized for small screens (e.g., mobile) */}
      <SmallScreenHeader />

      {/* LargeScreenHeader: Renders header optimized for large screens (e.g., desktop) */}
      <LargeScreenHeader />
    </div>
  );
}

export default Header;
