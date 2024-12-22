import React from 'react';


// Creating Demo Data fro NewQueries
const demoData = [
    { name: "John", age: 25, course: "bsc", number: 9876543210 },
    { name: "Sarah", age: 22, course: "msc", number: 9871234567 },
    { name: "Alice", age: 24, course: "phd", number: 9988776655 },
    { name: "David", age: 28, course: "mba", number: 9123456789 },
    { name: "Eve", age: 26, course: "btech", number: 9234567890 },
    { name: "Michael", age: 30, course: "msc", number: 9345678901 },
    { name: "Sophia", age: 23, course: "mtech", number: 9456789012 },
    { name: "Daniel", age: 27, course: "bsc", number: 9567890123 },
    { name: "Olivia", age: 21, course: "msc", number: 9678901234 },
    { name: "Liam", age: 29, course: "mba", number: 9789012345 }
];

const NewQuery = () => {
    return (
        // For Table To show NewQueries
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">New Queries</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white border-separate border border-gray-200 rounded-lg shadow-md">
                    
                    {/* The Column Name in Table */}
                    <thead className="bg-[#BCCCDC] text-gray-600">
                        
                        {/* for Add Button for Queries */}
                        <tr >
                            <th colSpan="6" className=' text-right px-4 text-black '>
                                <button className=' text-right hover:text-gray-700 hover:bg-gray-100 bg-[#bbd4f1] border-[#b6c9dd] border-2 rounded-md p-1 '>Add</button>
                            </th>
                        </tr>
                        
                        {/* For Column Name */}
                        <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Age</th>
                            <th className="px-4 py-2 text-left">Course</th>
                            <th className="px-4 py-2 text-left">Number</th>
                            <th className="px-4 py-2 text-center">Approve</th>
                            <th className="px-4 py-2 text-center">Delete</th>
                        </tr>
                    </thead>

                    {/* Table Body for table */}
                    <tbody>

                        {/* use map function to gather and show data */}
                        {demoData.map((student, index) => (

                            // For Data showing
                            <tr key={index} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
                                <td className="px-4 py-2">{student.name}</td>
                                <td className="px-4 py-2">{student.age}</td>
                                <td className="px-4 py-2">{student.course}</td>
                                <td className="px-4 py-2">{student.number}</td>
                                
                                {/* For Approve Button */}
                                <td className="px-4 py-2 text-center">
                                    <button className=' hover:text-gray-700 hover:bg-gray-100 bg-[#bbd4f1] border-[#b6c9dd] border-2 rounded-md p-1'
                                    onClick={()=>{}} >
                                        Approve
                                    </button>
                                </td>

                                {/* For Delete Button */}
                                <td className="px-4 py-2 text-center">
                                    <button 
                                    className=' hover:text-gray-700 hover:bg-gray-100 bg-[#bbd4f1] border-[#b6c9dd] border-2 rounded-md p-1'
                                    onClick={()=>{}} >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewQuery;
