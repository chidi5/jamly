import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginIcon } from '@heroicons/react/outline'
import SidebarLinkGroup from './SidebarLinkGroup';

function StoreSidebar({
    navbarOpen,
    setNavbarOpen
  }) {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const navbar = useRef(null);

    const storedNavbarExpanded = localStorage.getItem('navbar-expanded');
    const [navbarExpanded, setNavbarExpanded] = useState(storedNavbarExpanded === null ? false : storedNavbarExpanded === 'true');

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
        if (!navbar.current || !trigger.current) return;
        if (!navbarOpen || navbar.current.contains(target) || trigger.current.contains(target)) return;
        setNavbarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
        if (!navbarOpen || keyCode !== 27) return;
        setNavbarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('navbar-expanded', navbarExpanded);
        if (navbarExpanded) {
        document.querySelector('body').classList.add('navbar-expanded');
        } else {
        document.querySelector('body').classList.remove('navbar-expanded');
        }
    }, [navbarExpanded]);

    return (
        <div>
        {/* Sidebar backdrop (mobile only) */}
        <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${navbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

        {/* Sidebar */}
        <div
            id="navbar"
            ref={navbar}
            className={`flex flex-col absolute z-40 left-0 top-0 lg:hidden lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:navbar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out ${navbarOpen ? 'translate-x-0' : '-translate-x-64'}`}
        >

            {/* Sidebar header */}
            <div className="flex justify-between mb-10 pr-3 sm:px-2">
                {/* Close button */}
                <button
                    ref={trigger}
                    className="lg:hidden text-gray-500 hover:text-gray-400"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    aria-controls="navbar"
                    aria-expanded={navbarOpen}
                >
                    <span className="sr-only">Close sidebar</span>
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                </button>
                {/* Logo */}
                <Link to="/" className="block">
                    <svg width="32" height="32" viewBox="0 0 32 32">
                    <defs>
                        <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                        <stop stopColor="#A5B4FC" offset="100%" />
                        </linearGradient>
                        <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                        <stop stopColor="#38BDF8" offset="100%" />
                        </linearGradient>
                    </defs>
                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                    <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                    <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                    <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                    </svg>
                </Link>
            </div>

            {/* Links */}
            <div className="space-y-8">
                {/* Pages group */}
                <div>
                    <ul className="mt-3">
                        {/* Home */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/admin' && 'bg-gray-900'}`}>
                            <Link to="/admin" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname === '/admin' && 'hover:text-gray-200'}`}>
                            <div className="flex items-center">
                                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                <path className={`fill-current text-gray-400 ${pathname === '/admin' && '!text-indigo-500'}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                                <path className={`fill-current text-gray-600 ${pathname === '/admin' && 'text-indigo-600'}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                                <path className={`fill-current text-gray-400 ${pathname === '/admin' && 'text-indigo-200'}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                                </svg>
                                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Home</span>
                            </div>
                            </Link>
                        </li>
                        {/* Orders */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('orders') && 'bg-gray-900'}`}>
                            <Link to="/sales/orders" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('orders') && 'hover:text-gray-200'}`}>
                            <div className="flex items-center">
                                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                <path className={`fill-current text-gray-600 ${pathname.includes('orders') && 'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                                <path className={`fill-current text-gray-400 ${pathname.includes('orders') && 'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                                </svg>
                                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Orders</span>
                            </div>
                            </Link>
                        </li>
                        {/* Customers */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('customers') && 'bg-gray-900'}`}>
                            <Link to="/customers" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('customers') && 'hover:text-gray-200'}`}>
                            <div className="flex items-center">
                                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                <path className={`fill-current text-gray-600 ${pathname.includes('customers') && 'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                                <path className={`fill-current text-gray-400 ${pathname.includes('customers') && 'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                                </svg>
                                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Customers</span>
                            </div>
                            </Link>
                        </li>
                        {/* Analytics */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('analytics') && 'bg-gray-900'}`}>
                            <Link  to="/a" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('analytics') && 'hover:text-gray-200'}`}>
                            <div className="flex items-center">
                                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                <path className={`fill-current text-gray-600 ${pathname.includes('analytics') && 'text-indigo-500'}`} d="M0 20h24v2H0z" />
                                <path className={`fill-current text-gray-400 ${pathname.includes('analytics') && 'text-indigo-300'}`} d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z" />
                                </svg>
                                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Analytics</span>
                            </div>
                            </Link>
                        </li>
                        
                        {/* Product */}
                        <SidebarLinkGroup activecondition={pathname.includes('product')}>
                            {(handleClick, open) => {
                            return (
                                <Fragment>
                                    <Link to="/product" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('product') && 'hover:text-gray-200'}`} onClick={(e) => { e.preventDefault(); navbarExpanded ? handleClick() : setNavbarExpanded(true) }}>
                                        <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                            <path className={`fill-current text-gray-400 ${pathname.includes('product') && 'text-indigo-300'}`} d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                                            <path className={`fill-current text-gray-700 ${pathname.includes('product') && '!text-indigo-600'}`} d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                                            <path className={`fill-current text-gray-600 ${pathname.includes('product') && 'text-indigo-500'}`} d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                                            </svg>
                                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Products</span>
                                        </div>
                                        {/* Icon */}
                                        <div className="flex shrink-0 ml-2">
                                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                        </div>
                                    </Link>
                                    <div className="lg:hidden lg:navbar-expanded:block 2xl:block">
                                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                        <li className="mb-1 last:mb-0">
                                            <Link to="/products" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                                            <span className="text-sm font-medium lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">All Product</span>
                                            </Link>
                                        </li>
                                        <li className="mb-1 last:mb-0">
                                            <Link to="/add-product" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                                            <span className="text-sm font-medium lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Add Product</span>
                                            </Link>
                                        </li>
                                        <li className="mb-1 last:mb-0">
                                            <Link to="/edit-product" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                                            <span className="text-sm font-medium lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Edit Product</span>
                                            </Link>
                                        </li>
                                        </ul>
                                    </div>
                                </Fragment>
                            );
                            }}
                        </SidebarLinkGroup>
                        
                    </ul>
                </div>
            </div>

            {/* Expand / collapse button */}
            <div className="pt-3 lg:inline-flex 2xl:hidden justify-end mt-auto">
                <div className="px-3 py-2">
                    <Link  to="/logout" className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname.includes('logout') && 'hover:text-gray-200'}`}>
                        <div className="flex items-center">
                            <LoginIcon className="shrink-0 h-6 w-6" aria-hidden="true" />
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:navbar-expanded:opacity-100 2xl:opacity-100 duration-200">Logout</span>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
        </div>
    );
}

export default StoreSidebar
