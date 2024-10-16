import Image from "next/image";
import React from "react";

const StatisticalCard = ({ imageSrc, title, amount, bgColor }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col gap-1">
      <div className={`w-14 h-14 p-2 ${bgColor} rounded-full`}>
        <Image src={imageSrc} alt={title} className="w-full h-full object-contain" />
      </div>
      <p className="text-xs text-gray-400">{title}</p>
      <div className="text-lg font-bold">
        <h1>{amount}</h1>
      </div>
    </div>
  );
};

export default StatisticalCard;
