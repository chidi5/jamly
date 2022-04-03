import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../screens/HomePage'
import HomeScreen from '../screens/HomeScreen'
import StoreHeader from './StoreHeader'
import StoreSidebar from './StoreSidebar'
import Sidebar from './Sidebar'
import Header from './Header'
import AccountSetup from '../screens/AccountSetup'
import OrderListScreen from '../screens/OrderListScreen'
import ProductList from '../screens/ProductList'
import ProductEdit from '../screens/ProductEdit'
import OrderScreen from '../screens/OrderScreen'
import CategoryListScreen from '../screens/CategoryListScreen'
import ProductScreen from '../screens/ProductScreen'
import CustomerListScreen from '../screens/CustomerListScreen'

function PrivateLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation()

    return (

        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            {pathname != '/admin/account-setup' && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                {pathname != '/admin/account-setup' && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
                
                <Routes>
                    <Route path="/admin">
                        <Route path="" element={<HomeScreen />} />
                        <Route path="account-setup" element={<AccountSetup />} />
                        <Route path="customer" element={<CustomerListScreen />} />
                        <Route path="category">
                            <Route path=":id/edit" element={<CategoryListScreen />} />
                            <Route path="" element={<CategoryListScreen />} />
                        </Route>
                        <Route path="order">
                            <Route path=":id" element={<OrderScreen />} />
                            <Route path="" element={<OrderListScreen />} />
                        </Route>
                        <Route path="product">
                            <Route path=":id/edit" element={<ProductEdit />} />
                            <Route path="" element={<ProductList />} />
                        </Route>
                    </Route>
                </Routes>

            </div>
        </div>
    )
}

export default PrivateLayout