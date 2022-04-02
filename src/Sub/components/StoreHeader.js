import { ShoppingBagIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listCategory } from '../../actions/product'
import UserAvatar from '../../static/images/icon.png'
import Cart from '../partials/header/Cart'
import Search from '../partials/header/Search'
import UserMenu from '../partials/header/UserMenu'
import { STORE_SUCCESS } from '../../actions/types'

function StoreHeader({
    navbarOpen,
    setNavbarOpen
  }) {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    const categoryList = useSelector(state => state.categoryList)
    const { category } = categoryList

    const storeFront = useSelector(state => state.storeFront)
    const { store } = storeFront
    
    useEffect(() => {
        if({ type: STORE_SUCCESS }) {
            const id = store.store_data._id
            console.log(id)
            dispatch(listCategory(id))
        }


        //document.body.style.backgroundColor="#ffffff"
        //return() => {
        //    document.body.style.backgroundColor= 'rgb(241 245 249)'
        //}
    }, [dispatch, store, id]); // triggered on route change

    return (
        <header className='font-loader'>
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
                                <Link to="/" className="flex items-center py-4">
                                    <img src={UserAvatar} alt="Logo" className="h-8 w-8 mr-2" />
                                    <span className="font-bold text-gray-500 text-2xl">Navigation</span>
                                </Link>
                            </div>
                        </div>

                        {/* Secondary Navbar items */}
                        <div className="flex items-center">
                            {/* Primary Navbar items */}
                            <div className='hidden md:block'>
                                <Search />
                            </div>
                            <div className="relative inline-flex ml-3">
                                <button
                                    className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ${open && 'bg-gray-200'}`}
                                    aria-haspopup="true"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="sr-only">Cart</span>
                                    <ShoppingBagIcon className="w-4 h-4" />
                                </button>
                            </div>
                            <Cart open={open} setOpen={setOpen} />
                            {/*  Divider */}
                            <hr className="w-px h-6 bg-gray-200 mx-3 hidden" />
                            <div className='hidden'>
                                <UserMenu />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </nav>
            <div className='relative flex bg-white z-10 w-full h-12 px-4 sm:px-6 lg:px-8 border-gray-100 border-b border-t-0'>
                <ul className='flex items-center text-center list-none space-x-4 text-sm text-gray-600'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {category.map(item => (
                        <li>
                            <Link to={item.name}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default StoreHeader
