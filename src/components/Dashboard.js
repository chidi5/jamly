import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import HomeScreen from '../screens/HomeScreen'
import Landing from './Landing';

function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation()

    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            {pathname !== '/' ? <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> : ''}

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                {pathname !== '/' ? <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> : ''}

                <Routes>
                    <Route path="admin/">
                        <Route path="" element={<HomeScreen />} />
                    </Route>
                    <Route path="/" element={<Landing />} exact />
                </Routes>

            </div>
        </div>
    );
}

export default Dashboard;
