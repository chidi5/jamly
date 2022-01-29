import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../screens/HomePage'
import HomeScreen from '../screens/HomeScreen'
import StoreHeader from './StoreHeader'
import StoreSidebar from './StoreSidebar'
import Sidebar from './Sidebar'
import Header from './Header'
import AccountSetup from '../screens/AccountSetup'

function Main({subDomain}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { pathname } = useLocation()
    const exclusionArray = [
        '/',
        '/admin/account-setup',
    ]
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            {exclusionArray.indexOf(pathname) < 0 && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
            {pathname === '/' && <StoreSidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />}

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                {exclusionArray.indexOf(pathname) < 0 && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
                
                {pathname === '/' && <StoreHeader navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />}
                <Routes>
                    <Route path="/" element={<HomePage subDomain={subDomain} />} exact />
                    <Route path="admin">
                        <Route path="" element={<HomeScreen />} />
                        <Route path="account-setup" element={<AccountSetup />} />
                    </Route>
                </Routes>

            </div>
        </div>
    )
}

export default Main
