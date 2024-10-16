import Statistical from "@/Components/Dashboard/Statistical";
import Header from "@/Components/UI/Header";
import React from "react";
import { BiSolidShare } from "react-icons/bi";

const Home = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen w-full">
      <Header title="Dashboard" icon={<BiSolidShare />} />
      <Statistical />
    </div>
  );
};

export default Home;
