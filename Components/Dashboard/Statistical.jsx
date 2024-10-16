"use client";
import React from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import img from "../../Public/Img/wallet1.png";
import img1 from "../../Public/Img/auditReport2.png";
import StatisticalCard from "../UI/StatisticalCard";
import { ButtonUi } from "../UI/Button";
import { useRouter } from "next/navigation";

const Statistical = () => {
  const router = useRouter();
  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="px-6 py-4 flex flex-col gap-2">
        <p className="text-sm font-medium">Statistical information</p>
        <div className="bg-[#FEFEFF] grid grid-cols-2 max-md:grid-cols-1 gap-2 p-4 rounded-lg overflow-hidden">
          <StatisticalCard
            imageSrc={img}
            title="Total Transaction Amount"
            amount="1,000,000.00 Birr"
            bgColor="bg-[#EFEEFF]"
          />
          <StatisticalCard
            imageSrc={img1}
            title="Total Transaction Count"
            amount="12,200 Transactions"
            bgColor="bg-[#EFEEFF]"
          />
          <div className="bg-white rounded-lg p-4 shadow-md max-h-[80vh] pb-10 overflow-hidden">
            <p className="font-bold mb-2">Graphical Information</p>
            <ButtonUi
              label="Transactions"
              className="px-5 py-[6px] bg-[#6F018D] text-white rounded-md"
              onClick={() => router.push("/transactions")}
            />
            <div className="flex items-center justify-between my-5">
              <div>
                <h4 className="text-sm text-gray-400">Total Transactions</h4>
                <h1 className="font-bold text-xl">12,000</h1>
              </div>
              <select
                name="Monthly"
                id="Monthly"
                className="bg-[#EFEEFF] px-2 py-2 rounded-lg text-gray-400 outline-none"
              >
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="h-full flex flex-col items-start justify-start">
              <BarChart />
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md max-h-[80vh] pb-10 overflow-hidden">
            <p className="font-bold mb-2">Transactions in Type</p>
            <div className="h-full flex flex-col items-center justify-center ">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistical;
