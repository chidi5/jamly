import React from 'react'

function StockReport() {
    const stocks = [
        {
          id: '0',
          item: "Chelsea Boot",
          Product_id: 'XGY-345',
          status: 'In Stock',
        },
        {
          id: '1',
          item: "Shoe Dogg",
          Product_id: 'XGY-326',
          status: 'In Stock',
        },
        {
            id: '2',
            item: "Air Max",
            Product_id: 'XGY-445',
            status: 'Out of Stock',
        },
        {
            id: '3',
            item: "Addidas NMD",
            Product_id: 'XGY-245',
            status: 'In Stock',
        },
    ];
    
    return (
        <div className="col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Stock Report</h2>
            </header>
            <div className="p-3">
    
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Item</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Product ID</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Status</div>
                            </th>
                        </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100">
                        {
                            stocks.map(stock => {
                            return (
                                <tr key={stock.id}>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800">{stock.item}</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{stock.Product_id}</div>
                                    </td>
                                    {stock.status === 'In Stock' ? 
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div class="py-1 px-2 rounded-full bg-green-200 text-green-800 cursor-pointer font-medium"> {stock.status} </div>
                                            </div>
                                        </td> 
                                        :
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div class="py-1 px-2 rounded-full bg-red-200 text-red-800 backdrop-blur-sm cursor-pointer font-medium"> {stock.status} </div>
                                            </div>
                                        </td>
                                    }
                                    
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

export default StockReport
