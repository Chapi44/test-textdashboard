import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Profile = ({ name, role, profileImage }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="w-8 h-8">
        <Image src={profileImage} alt="profile" className="w-full h-full object-contain" />
      </div>
      <div>
        <p className="text-xs font-medium">{name}</p>
        <p className="text-[10px]">{role}</p>
      </div>
      <div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Profile;
