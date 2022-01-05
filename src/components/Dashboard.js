import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import HomeScreen from '../screens/HomeScreen'

function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />
                </Routes>

            </div>
        </div>
    );
}

export default Dashboard;
