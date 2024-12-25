"use client";

import React, { useState } from "react";
import { getProjectData } from "../lib/ship12";
import MonthCardContent from "./MonthCardContent";

const MonthCard = ({ month }) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = getProjectData(month);

  return (
    <div
      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${
        isOpen
          ? "bg-blue-100 border-blue-500 shadow-lg"
          : "border-opacity-50 shadow"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative text-center">
        <h3
          className={`transition-transform duration-500 ease-in-out ${
            isOpen
              ? "transform translate-x-[-50%] translate-y-[-50%] absolute top-2 left-7 text-sm text-black"
              : "text-xl font-bold"
          }`}
        >
          {data.icon ? data.icon : "❓"} {month}
        </h3>
      </div>
      <div
        className={`relative text-center overflow-hidden pb-2 ${
          isOpen ? "max-h-full" : "max-h-0"
        }`}
        style={{ transition: "max-height 0.5s ease-in-out" }}
      >
        {isOpen && <MonthCardContent data={data} />}
      </div>
    </div>
  );
};

export default MonthCard;
