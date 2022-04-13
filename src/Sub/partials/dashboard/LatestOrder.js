import { ArrowNarrowRightIcon, ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react'
import { Link } from 'react-router-dom';

function LatestOrder({orders}) {
    
    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Product Orders</h2>
            </header>
            <div className="p-3">
    
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Order ID</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Created</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Customer</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Status</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Total</div>
                            </th>
                        </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100">
                        {
                            orders.map(order => {
                            return (
                                <tr key={order._id}>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{order._id}</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{order.created_at.substring(0, 10)}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">{`${order.first_name} ${order.last_name}`}</div>
                                    </td>
                                    { order.is_paid ?
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">Paid</div>
                                        </td>:
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-orange-500">Pending</div>
                                        </td>
                                    }
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center">{order.total_price}</div>
                                    </td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                </div>
    
            </div>
            <div className="px-5 py-4 border-t border-gray-100 justify-end">
                <Link to="/admin/order" className="font-semibold text-indigo-500 hover:text-indigo-600 justify-end">
                    view
                    <span>
                        <ArrowNarrowRightIcon className='w-5 h-5 fill-current opacity-50 shrink-0'/>
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default LatestOrder
