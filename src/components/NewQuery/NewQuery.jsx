import React, { useState,useContext } from 'react';
import useTheme, { ThemeProvider } from '../../Context/NewContext';


// Creating Demo Data for NewQueries
const demoData = [
  { name: 'John', age: 25, course: 'bsc', number: 9876543210 },
  { name: 'Sarah', age: 22, course: 'msc', number: 9871234567 },
  { name: 'Alice', age: 24, course: 'phd', number: 9988776655 },
  { name: 'David', age: 28, course: 'mba', number: 9123456789 },
  { name: 'Eve', age: 26, course: 'btech', number: 9234567890 },
  { name: 'Michael', age: 30, course: 'msc', number: 9345678901 },
  { name: 'Sophia', age: 23, course: 'mtech', number: 9456789012 },
  { name: 'Daniel', age: 27, course: 'bsc', number: 9567890123 },
  { name: 'Olivia', age: 21, course: 'msc', number: 9678901234 },
  { name: 'Liam', age: 29, course: 'mba', number: 9789012345 },
];

const NewQuery = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which dropdown is open
  const toggleDropdown = (index) => {
    // Toggle the specific row's dropdown
    if (openIndex === index) {
      setOpenIndex(null); // Close it if already open
    } else {
      setOpenIndex(index); // Open the selected dropdown
    }
  };
 
  const {isOpenForSideBar} = useTheme()

  return (
    <ThemeProvider value={{isOpenForSideBar}}>
    {/* // For Table To show NewQueries */}
    <div className={`flex-1 bg-gray-100 p-6 transition-all duration-300 ${isOpenForSideBar ? 'ml-64' : 'ml-20'} p-6`}>
      <h1 className="text-3xl font-bold text-center mb-8">New Queries</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border-separate border border-gray-200 rounded-lg shadow-md">
          {/* The Column Name in Table */}
          <thead className="bg-[#BCCCDC] text-gray-600">
            {/* For Column Name */}
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Course</th>
              <th className="px-4 py-2 text-left">Number</th>
              <th className="px-4 py-2 text-center">Approve</th>
            </tr>
          </thead>

          {/* Table Body for table */}
          <tbody>
            {/* use map function to gather and show data */}
            {demoData.map((student, index) => (
              // For Data showing
              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
              >
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.age}</td>
                <td className="px-4 py-2">{student.course}</td>
                <td className="px-4 py-2">{student.number}</td>

                {/* For Approve Button */}
                <td className="px-4 py-2 text-center">
                  {/* For DropDown menu */}
                  <div className="relative inline-block">
                    {/* Toggle specific row  */}
                    <button onClick={() => toggleDropdown(index)} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
                      Action
                      <svg className="w-2.5 h-2.5 ml-2 transform transition-transform duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                    {/* For showing Menu */}
                    {openIndex === index && (
                      <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 shadow-md rounded-md z-50">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Edit
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Delete
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Option
                        </li>
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default NewQuery;
