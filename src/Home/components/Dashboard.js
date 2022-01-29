import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing';
import StoreLogin from '../screens/StoreLogin';

function Dashboard() {

    const [signUp, setSignUp] = useState(false);
    

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Routes>
                    <Route path="/" element={<Landing />} exact />
                    <Route path="store-login/" element={<StoreLogin signUp={signUp} setSignUp={setSignUp} />} exact />
                    <Route path="get-started/" element={<StoreLogin signUp={!signUp} setSignUp={setSignUp} />} exact />
                </Routes>

            </div>
        </div>
    );
}

export default Dashboard;
