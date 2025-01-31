import React, { useState } from 'react'; // Import React and useState for managing the sidebar state
import { Link } from 'react-router-dom'; // Import Link for routing to different pages

const MainContainer = () => {
  // State to toggle the sidebar open/close
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div
        className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 ease-in-out transform border-r-2 border-gray-600 fixed top-0 left-0 h-full lg:relative lg:mt-0 mt-16`}
      >
        {/* Dashboard Section with Hamburger Button for small screens */}
        <div className="flex justify-between items-center p-4">
          {/* Dashboard title appears only if sidebar is open */}
          <h2
            className={`text-xl font-bold transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
          >
            Dashboard
          </h2>

          {/* Hamburger menu for toggling sidebar on small screens */}
          <button
            onClick={toggleSidebar}
            className="text-2xl lg:hidden" // Show hamburger only on small screens
          >
            {/* Toggle the arrow depending on the state of the sidebar */}
            {isOpen ? '←' : '→'}
          </button>
        </div>

        {/* Navigation links in a table format */}
        <table className="mt-8 space-y-4 transition-all duration-300">
          {/* Home Link */}
          <tr>
            <td className="px-6 py-2">
              <Link to="/">
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </td>
            {/* Only show the text if sidebar is open */}
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/">Home</Link>
            </td>
          </tr>

          {/* Professors Link */}
          <tr>
            <td className="px-6 py-2">
              <Link to="/Professors">
                {/* Professors icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </td>
            {/* Only show the text if sidebar is open */}
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Professors">Professors</Link>
            </td>
          </tr>

          {/* Students Link */}
          <tr>
            <td className="px-6 py-2">
              <Link to="/Student">
                {/* Students icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </Link>
            </td>
            {/* Only show the text if sidebar is open */}
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Student">Students</Link>
            </td>
          </tr>

          {/* Courses Link */}
          <tr>
            <td className="px-6 py-2">
              <Link to="/Courses">
                {/* Courses icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-book"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </Link>
            </td>
            {/* Only show the text if sidebar is open */}
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Courses">Courses</Link>
            </td>
          </tr>

          {/* Departments Link */}
          <tr>
            <td className="px-6 py-2">
              <Link to="/Departments">
                {/* Departments icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-briefcase"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </Link>
            </td>
            {/* Only show the text if sidebar is open */}
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Departments">Departments</Link>
            </td>
          </tr>
        </table>
      </div>

      {/* Main content area */}
      <div
        className={`flex-1 bg-gray-100 p-6 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'} lg:ml-64`} 
      >
        {/* Display main content (e.g., student information or other components) */}
        <Student />
      </div>
    </div>
  );
};

export default MainContainer; // Export the MainContainer component
