import TransactionTable from '@/Components/Transaction/TransactionTable'
import Header from '@/Components/UI/Header';
import React from 'react'
import { BiSolidShare } from "react-icons/bi";
const Transactions = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen">
        <Header title="Transactions" icon={<BiSolidShare />} />
        <TransactionTable />
    </div>
  )
}

export default Transactions