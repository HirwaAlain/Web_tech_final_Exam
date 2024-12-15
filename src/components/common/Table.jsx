import { useState } from "react";

const Table = ({ columns, data, searchable = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;

  // Filter data based on search
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full">
      {searchable && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="p-3 border-b text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-3 border-b">
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
