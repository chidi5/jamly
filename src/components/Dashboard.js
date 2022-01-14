import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import HomeScreen from '../screens/HomeScreen'
import Landing from './Landing';
import StoreLogin from '../screens/StoreLogin';

function Dashboard() {

    const signIn = true
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const { pathname } = useLocation()
    const exclusionArray = [
        '/',
        '/store-login',
        '/get-started',
    ]

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            {exclusionArray.indexOf(pathname) < 0 && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                {exclusionArray.indexOf(pathname) < 0 && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}

                <Routes>
                    <Route path="admin/">
                        <Route path="" element={<HomeScreen />} />
                    </Route>
                    <Route path="/" element={<Landing />} exact />
                    <Route path="store-login/" element={<StoreLogin signUp={signUp} setSignUp={setSignUp} />} exact />
                    <Route path="get-started/" element={<StoreLogin signUp={signIn} setSignUp={setSignUp} />} exact />
                </Routes>

            </div>
        </div>
    );
}

export default Dashboard;
