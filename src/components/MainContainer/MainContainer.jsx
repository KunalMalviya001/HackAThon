import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainContainer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-64">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 ease-in-out transform border-r-2 border-gray-600 fixed top-0 left-0 h-full mt-16`}>
        
        {/* For Showing Dashboard thing */}
        <div className="flex justify-between items-center p-4">
          <h2 className={`text-xl font-bold transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            Dashboard
          </h2>

          {/* Hamburger menu for small screens */}
          <button onClick={toggleSidebar} className="text-2xl">
            {isOpen ? '←' : '→'}
          </button>
        </div>

        {/* For Creating option by table */}
        <table className="mt-8 space-y-4 transition-all duration-300">

          {/* For Home */}
          <tr>
            <td className='px-6 py-2'>
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </td>
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/">Home</Link>
            </td>
          </tr>

          {/* for Row 1 */}
          <tr>
            <td className='px-6 py-2'>
              <Link to="/Professors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </td>
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Professors">Professors</Link>
            </td>
          </tr>

          {/* For row 2 */}
          <tr>
            <td className='px-6 py-2'>
              <Link to="/Student">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </Link>
            </td>
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Student">Students</Link>
            </td>
          </tr>

          {/* For Row 3 */}
          <tr>
            <td className='px-6 py-2'>
              <Link to="/Courses">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </Link>
            </td>
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Courses">Courses</Link>
            </td>
          </tr>

          {/* For Row 4 */}
          <tr>
            <td className='px-6 py-2'>
              <Link to="/Departments">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </Link>
            </td>
            <td className={`${isOpen ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
              <Link to="/Departments">Departments</Link>
            </td>
          </tr>

        </table>
      </div>

      {/* Main content area */}
      <div className={`flex-1 bg-gray-100 p-6 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'}`}>
      <Student/>
      </div>
    </div>
  );
};

export default MainContainer;
