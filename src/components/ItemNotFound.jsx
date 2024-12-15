import React from "react";
import icons from "../assets/icons/icon";

function ItemNotFound() {
  return (
    <div className="flex flex-col justify-center items-center rounded h-[200px]  sm:h-[250px] mb-2 overflow-hidden border bg-gray-200 item_not_found">
      <img src={icons.notfound} alt="s" />
      <p className="text-gray-500  text-sm">Item Not Found</p>
    </div>
  );
}

export default ItemNotFound;
