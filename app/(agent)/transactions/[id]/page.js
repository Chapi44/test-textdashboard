import TransactionDetail from "@/Components/TransactionDetail/TransactionDetail";
import Header from "@/Components/UI/Header";
import React from "react";
import { BiSolidShare } from "react-icons/bi";

export async function generateStaticParams() {
  const dummyTransactions = [
    { id: '1329100821' },
    { id: '1329100822' },
    { id: '1329100823' },
  ];

  return dummyTransactions.map((transaction) => ({
    id: transaction.id,
  }));
}

const TransactionsDetail = ({ params }) => {
  const { id } = params;
  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <Header title="Transaction Details" icon={<BiSolidShare />} />
      <TransactionDetail id={id} />
    </div>
  );
};

export default TransactionsDetail;
