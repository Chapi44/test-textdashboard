"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ title, icon }) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-3 px-6 bg-white pb-2 cursor-pointer"
      onClick={() => router.back()}
    >
      {icon}
      <span className="font-medium text-xl">{title}</span>
    </div>
  );
};

export default Header;
