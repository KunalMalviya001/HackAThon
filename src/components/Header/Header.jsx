import React from 'react'

function Header() {
    return (
        // For header 
        <header className=' shadow sticky z-50 top-0 '>
            
            {/* for NAV bar in web page */}
            <nav className=' bg-[#9AA6B2] border-gray-200 px-4 lg:px-6 py-2.5 justify-center'>
                
                {/* div for inside Nav css */}
                <div className=' flex flex-wraps justify-between items-center mx-auto max-w-screen-xl ' >
                    
                    {/* For Showing Admin Dashboard text */}
                    <div className='flex mt-4 text-xl content-center '>
                        <p className=' text-[#F8FAFC] '>Admin Dashboard</p>
                    </div>

                    {/* For log-out Button */}
                    <div className="flex items-center lg:order-2">
                        <button className=" hover:bg-gray-300 bg-[#D9EAFD] border-[#b6c9dd] border-2 rounded-md p-1 " onClick={() => { console.log("logout") }} >
                            logout
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header