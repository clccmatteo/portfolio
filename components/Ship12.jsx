"use client";

import React from "react";
import MonthCard from "./MonthCard";

const Ship12 = ({ months }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {months.map((month, index) => (
        <MonthCard key={index} month={month} />
      ))}
    </div>
  );
};

export default Ship12;
