import React, { useEffect } from 'react'
import UserAvatar from '../../static/images/icon.png'
import Cart from '../partials/header/Cart'
import Search from '../partials/header/Search'
import UserMenu from '../partials/header/UserMenu'

function StoreHeader({
    navbarOpen,
    setNavbarOpen
  }) {
    
    useEffect(() => {
        //document.body.style.backgroundColor="#ffffff"
        //return() => {
        //    document.body.style.backgroundColor= 'rgb(241 245 249)'
        //}
    }, []); // triggered on route change

    return (
        <header>
            <nav className='sticky top-0 bg-white z-30 border-gray-200 border-b'>
                <div className='px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16 -mb-px'>
                        {/* Header: Left side */}
                        <div className="flex md:hidden">
                            {/* Hamburger button */}
                            <button
                            className="text-gray-500 hover:text-gray-600 md:hidden"
                            aria-controls="navbar"
                            aria-expanded={navbarOpen}
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2" />
                                    <rect x="4" y="11" width="16" height="2" />
                                    <rect x="4" y="17" width="16" height="2" />
                                </svg>
                            </button>
                        </div>

                        {/* Center */}
                        <div className="flex">
                            <div>
                                {/* Website Logo */}
                                <a href="#" className="flex items-center py-4">
                                    <img src={UserAvatar} alt="Logo" className="h-8 w-8 mr-2" />
                                    <span className="font-bold text-gray-500 text-2xl">Navigation</span>
                                </a>
                            </div>
                        </div>

                        {/* Secondary Navbar items */}
                        <div className="flex items-center">
                            {/* Primary Navbar items */}
                            <div className='hidden md:block'>
                                <Search />
                            </div>
                            <Cart />
                            {/*  Divider */}
                            <hr className="w-px h-6 bg-gray-200 mx-3 hidden md:block" />
                            <div className='hidden md:block'>
                                <UserMenu />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </nav>
            <div className='relative flex bg-gray-910 z-10 w-full h-12 px-4 sm:px-6 lg:px-8 border-gray-300 border-b'>
                <ul className='flex items-center text-center list-none space-x-4 text-sm text-gray-600'>
                    <li>Home</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                </ul>
            </div>
        </header>
    )
}

export default StoreHeader
