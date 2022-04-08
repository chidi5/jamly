import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../screens/HomePage'
import StoreHeader from './StoreHeader'
import StoreSidebar from './StoreSidebar'
import ProductScreen from '../screens/ProductScreen'
import ProductCategory from '../screens/ProductCategory'

function PublicLayout({subDomain}) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (

        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <StoreSidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <StoreHeader navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} subDomain={subDomain} />

                <Routes>
                    <Route path="/" element={<HomePage subDomain={subDomain} />} exact />
                    <Route path="/:id" element={<ProductCategory />} />
                    <Route path='/product/:id' element={<ProductScreen subDomain={subDomain} />} />
                </Routes>

            </div>
        </div>
    )
}

export default PublicLayout