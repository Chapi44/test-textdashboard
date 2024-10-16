import React from "react";
import profiles from "../../Public/Img/profile.png";
import Profile from "./Profile";


const DashboardHeader = () => {
  return (
    <div className="flex flex-col gap-2 py-2 bg-white rounded-t-lg w-full">
      <div className="flex items-center justify-between px-6">
        <h4 className="font-medium text-lg">VERP Agent’s Dashboard</h4>
        <Profile name="Solomon Kebede" role="Agent" profileImage={profiles} />
      </div>
      <hr className="border-x-0 border-t-0 border-dotted border-b-[2px] border-gray-300" />
    </div>
  );
};
  
export default DashboardHeader;
