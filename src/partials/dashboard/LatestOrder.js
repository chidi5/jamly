import React from 'react'

function LatestOrder() {
    const orders = [
        {
          id: '0',
          order_id: "XGT-345",
          created: 'an hour ago',
          customer: 'Alex Shatov',
          total: '$2,890',
        },
        {
            id: '1',
            order_id: "XGT-345",
            created: 'an hour ago',
            customer: 'Mama Mia',
            total: '$10,000',
        },
        {
            id: '2',
            order_id: "XGT-321",
            created: '2 hours ago',
            customer: 'Emeka Kuna',
            total: '$5,800',
        },
        {
            id: '3',
            order_id: "XGT-354",
            created: '5 hours ago',
            customer: 'Emma Croft',
            total: '$8,000',
        },
        {
            id: '4',
            order_id: "XGT-365",
            created: 'a day ago',
            customer: 'Aj Mama',
            total: 'N2,500',
        },

        
    ];
    
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
                            <div className="font-semibold text-center">Total</div>
                            </th>
                        </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100">
                        {
                            orders.map(order => {
                            return (
                                <tr key={order.id}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <div className="font-medium text-gray-800">{order.order_id}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">{order.created}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">{order.customer}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{order.total}</div>
                                </td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                </div>
    
            </div>
        </div>
    );
}

export default LatestOrder
