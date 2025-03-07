"use client";
import React from "react";
import Brain from "@/app/components/models/Brain"; // Corrected import path
import { BtnList } from "@/app/data"; // Ensure BtnList is properly defined

const Navigation = () => {
  console.log(BtnList); // Debugging: Check if BtnList has data

  if (!BtnList || BtnList.length === 0) {
    return <p>No buttons found</p>; // Show a message if the list is empty
  }

  const angleIncrement = (2 * Math.PI) / BtnList.length; // Convert degrees to radians
  const radius = 150; // Adjust radius for positioning

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Brain Model in the Center */}
      <div className="absolute z-10">
        <Brain />
      </div>

      {/* Buttons Positioned in a Circle */}
      {BtnList.map((btn, index) => {
        const angleRad = index * angleIncrement;
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);

        return (
          <button
            key={index}
            className="absolute bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;



