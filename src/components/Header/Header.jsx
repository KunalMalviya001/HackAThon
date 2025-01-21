import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const profile = () => {
        setIsOpen(!isOpen);
    };

    return (
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
    )
}

export default Header
