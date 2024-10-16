"use client";

import React, { useState } from "react";
import  Table  from "../UI/Table";
import { AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ButtonUi } from "../UI/Button";
import { MdSearch } from "react-icons/md";

const TransactionTable = () => {
  const router = useRouter();
  const [data, setData] = useState([
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
    {
      transactionId: 1329100823,
      dateTime: "May 12, 2024 12:20AM",
      customerName: "Solomon kebede Alemu",
      phoneNumber: "0921249864",
      paymentMethod: "CBE Birr",
      serviceType: "Birth",
      serviceName: "Current Registration",
      amount: 100.0,
      status: "Completed",
    },
  ]);

  const columns = [
    {
      key: "transactionId",
      label: "Transaction ID",
      render: (row) => `# ${row.transactionId}`,
    },
    { key: "dateTime", label: "Date & Time" },
    { key: "customerName", label: "Customer Name" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "paymentMethod", label: "Payment Method" },
    { key: "serviceType", label: "Service Type" },
    { key: "serviceName", label: "Service Name" },
    {
      key: "amount",
      label: "Amount",
      render: (row) => `${row.amount}.00 Birr`,
    },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <div className="bg-[#D3FCE3] text-[#35C04E] flex items-center justify-center p-1 rounded-full">
          {row.status}
        </div>
      ),
    },
    {
      key: "Actions",
      label: "Actions",
      render: (row) => (
        <div
          className="bg-[#D5D6E3] text-[#6F018D] flex items-center justify-center py-1 rounded-md"
          onClick={() => router.push(`/transactions/${row.transactionId}`)}
        >
          <AiFillEye size={18} />
        </div>
      ),
    },
  ];

  const handleSort = (key, direction) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="px-6 py-4 flex flex-col gap-2">
        <p className="text-sm font-medium">Transaction List</p>
        <div className="my-2 bg-white p-2 rounded-xl grid grid-cols-6 max-xl:grid-cols-3 gap-5">
          <div className="col-span-3">
            <div className="flex items-center bg-[#F8F8F8] px-2 gap-2 rounded-md w-[90%] max-xl:w-full">
              <MdSearch className="text-[#dadada]" size={22} />
              <input
                type="text"
                placeholder="Search by name, phone number or transaction ID"
                className="w-[90%] bg-transparent outline-none py-2 text-sm"
              />
            </div>
          </div>
          <div className="col-span-2 max-md:col-span-3">
            <div className="flex items-center gap-3 max-md:grid max-md:grid-cols-1">
              <span className="font-medium">Filters:</span>
              <select
                className="bg-[#F8F8F8] outline-none p-2 rounded-md text-[#b1b1b1] text-sm"
              >
                <option value="">By service type</option>
              </select>
              <select
                className="bg-[#F8F8F8] outline-none p-2 rounded-md text-[#b1b1b1] text-sm"
              >
                <option value="">By status</option>
              </select>
              <input
                type="date"
                className="bg-[#F8F8F8] outline-none p-2 rounded-md text-[#b1b1b1] text-sm"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <ButtonUi
              label="Export"
              icon={<AiFillEye />}
              className="px-5 py-[6px] bg-[#6F018D] text-white rounded-md w-fit"
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={data}
          pagination={{ rowsPerPage: 10 }}
          onSort={handleSort}
        />
      </div>
    </div>
  );
};

export default TransactionTable;
