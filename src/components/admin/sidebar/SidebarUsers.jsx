import React from "react";
import { useTable } from "react-table";
import fakeData from "../../../MOCK_DATA.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(fakeData);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        headerStyle: { textAlign: "center" },
      },
      {
        Header: "First Name",
        accessor: "first_name",
        headerStyle: { textAlign: "center" },
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        headerStyle: { textAlign: "center" },
      },
      {
        Header: "Email",
        accessor: "email",
        headerStyle: { textAlign: "center" },
      },
      {
        Header: "Gender",
        accessor: "gender",
        headerStyle: { textAlign: "center" },
      },
      {
        Header: "University",
        accessor: "university",
        headerStyle: { textAlign: "center" },
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.original.id)}
              className="px-2 py-1 bg-green-500 rounded text-white"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(row.original.id)}
              className="px-2 py-1 bg-red-500 rounded text-white"
            >
              Delete
            </button>
          </div>
        ),
      },
      
    ],
    []
 );

 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleEdit = (userId) => {
    toast.info(`Edit user with ID: ${userId}`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDelete = (userId) => {
    const updatedData = data.filter((user) => user.id !== userId);
    setData(updatedData);
    toast.success(`Deleted user with ID: ${userId}`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
 };

  return (
    <div className="ml-72 mr-8 mt-8 mb-8">
      <div>
        <table
          {...getTableProps()}
          className="border border-gray-300 shadow-2xl"
        >
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...restColumn } = column.getHeaderProps();
                    return (
                      <th 
                      key={key} {...restColumn}
                      className="p-2 text-left bg-blue-700"
                      >
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);

              const isEven = index % 2 === 0;
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.original.id}
                  className={`hover:bg-[#f6f8fa] ${
                    isEven ? "bg-white" : "bg-[#f6f8fa]"
                  }`}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={row.original.id}
                      className="p-2 bg-white bg-opacity-20 text-[#0e1726]"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
