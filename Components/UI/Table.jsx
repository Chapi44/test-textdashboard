import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const TableHeader = ({ columns, onSort }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    onSort(key, direction);
  };

  return (
    <thead className="w-full">
      <tr className="bg-[#ECEDF3] text-[#6F018D] text-sm">
        <th className="pl-2">
          <input type="checkbox" />
        </th>
        {columns.map((col, index) => (
          <th
            key={col.key}
            onClick={() => handleSort(col.key)}
            className={`py-4 text-left cursor-pointer ${columns?.length - 1 === index ? "pr-2" : ""}`}
          >
            <span className="flex gap-2 items-center text-nowrap">
              {col.label}
              {sortConfig.key === col.key ? (
                sortConfig.direction === "asc" ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )
              ) : (
                ""
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Table = ({ columns, data, pagination, onSort }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = pagination ? pagination.rowsPerPage : data?.length;

  const totalPages = Math.ceil(data?.length / rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-scroll rounded-md">
      <table className="w-full bg-white text-black">
        <TableHeader columns={columns} onSort={onSort} />
        <tbody className="w-full">
          {currentData?.map((row, index) => (
            <tr
              key={index}
              className={`w-full cursor-pointer text-xs ${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F6F6F9]"}`}
            >
              <td className="pl-3">
                <input type="checkbox" />
              </td>
              {columns.map((col, index) => (
                <td
                  key={col.key}
                  className={`pt-3 p-2 text-nowrap ${columns?.length - 1 === index ? "pr-4" : ""}`}
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && (
        <div className="bg-white text-gray-800 flex items-center gap-3 justify-end p-3">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(1)}
            className="border p-2 rounded-full cursor-pointer"
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="border p-2 rounded-full cursor-pointer"
          >
            <MdKeyboardArrowLeft />
          </button>
          <span className="text-sm">
            {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="border p-2 rounded-full cursor-pointer"
          >
            <MdKeyboardArrowRight />
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
            className="border p-2 rounded-full cursor-pointer"
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
