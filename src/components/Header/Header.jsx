import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useTheme, { ThemeProvider } from '../../Context/NewContext';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const profile = () => {
    setIsOpen(!isOpen);
  };

  // Destructure the values from the useTheme hook correctly
  const { isOpenForSideBar, toggleSidebar } = useTheme(); // Destructure from the object returned by useTheme()


    return (
        <>
            <header className='shadow sticky z-50 top-0'>
                <nav className='bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 justify-center'>
                    <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                        <div className='flex mt-4 text-xl content-center'>
                            <p className='text-[#F8FAFC]'>Admin Dashboard</p>
                        </div>

                        <div className="flex items-left lg:order-2">
                            <button
                                className="hover:bg-gray-300 hover:text-black bg-gray-600 text-white border-gray-400 border-2 rounded-md p-1"
                                onClick={() => { console.log("logout") }}
                            >
                                Logout
                            </button>

                            <div className='ml-4 items-center text-center lg:order-2 relative'>
                                <button className='text-white' onClick={profile} aria-expanded={isOpen ? 'true' : 'false'} aria-controls="profile-dropdown">
                                    Profile
                                </button>

                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-lg">
                                        <ul>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Profile</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Sign up</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Login</a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>



            <div className={`flex-1 bg-gray-100 p-6 transition-all duration-300 ${isOpenForSideBar ? 'ml-64' : 'ml-20'}`}>
                {/* Sidebar */}
                <div className={`${isOpenForSideBar ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 ease-in-out transform border-r-2 border-gray-600 fixed top-0 left-0 h-full mt-16`}>

                    {/* For Showing Dashboard thing */}
                    <div className="flex justify-between items-center p-4">
                        <h2 className={`text-xl font-bold transition-all duration-300 ${isOpenForSideBar ? 'block' : 'hidden'}`}>
                            Dashboard
                        </h2>

                        {/* Hamburger menu for small screens */}
                        <button onClick={toggleSidebar} className="text-2xl">
                            {isOpenForSideBar ? '←' : '→'}
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
                            <td className={`${isOpenForSideBar ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
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
                            <td className={`${isOpenForSideBar ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
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
                            <td className={`${isOpenForSideBar ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
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
                            <td className={`${isOpenForSideBar ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
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
                            <td className={`${isOpenForSideBar ? 'px-6 py-2 hover:bg-gray-700 cursor-pointer' : 'hidden'}`}>
                                <Link to="/Departments">Departments</Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Header
