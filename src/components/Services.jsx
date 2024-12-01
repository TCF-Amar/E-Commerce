import React from "react";
import icons from "../assets/icons/icon";

function Services() {
  return (
    <div
      className="flex flex-col sm:flex-row
     justify-around m-8 py-8 gap-8    "
    >
      <div className="flex flex-col items-center text-gray-700 font-semibold ">
        <img className="w-12" src={icons.exchange} alt="" />
        <p>Easy To Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center text-gray-700 font-semibold">
        <img className="w-12" src={icons.returnCheck} alt="" />
        <p>7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div className="flex flex-col items-center text-gray-700 font-semibold">
        <img className="w-12" src={icons.support} alt="" />
        <p>Best customer support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default Services;
