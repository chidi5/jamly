import React from 'react'
import LineChart from '../../charts/LineChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function SaleReport() {
    const chartData = {
        labels: [
          '01-12-2020', '01-01-2021', '01-02-2021',
          '01-03-2021', '01-04-2021', '01-05-2021',
          '01-06-2021', '01-07-2021', '01-08-2021',
          '01-09-2021', '01-10-2021', '01-11-2021',
          '01-12-2021', '01-01-2022', '01-02-2022',
          '01-03-2022', '01-04-2022', '01-05-2022',
          '01-06-2022', '01-07-2022', '01-08-2022',
          '01-09-2022', '01-10-2022', '01-11-2022',
          '01-12-2022', '01-01-2023',
        ],
        datasets: [
          // Indigo line
          {
            label: 'Current',
            data: [
              73, 64, 73, 69, 104, 104, 164,
              164, 120, 120, 120, 148, 142, 104,
              122, 110, 104, 152, 166, 233, 268,
              252, 284, 284, 333, 323,
            ],
            borderColor: tailwindConfig().theme.colors.indigo[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          },
          // Blue line
          {
            label: 'Previous',
            data: [
              184, 86, 42, 378, 42, 243, 38,
              120, 0, 0, 42, 0, 84, 0,
              276, 0, 124, 42, 124, 88, 88,
              215, 156, 88, 124, 64,
            ],
            borderColor: tailwindConfig().theme.colors.blue[400],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
          },
          // Green line
          {
            label: 'Average',
            data: [
              122, 170, 192, 86, 102, 124, 115,
              115, 56, 104, 0, 72, 208, 186,
              223, 188, 114, 162, 200, 150, 118,
              118, 76, 122, 230, 268,
            ],
            borderColor: tailwindConfig().theme.colors.green[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.green[500],
          },
        ],
      };
    return (
        <div className="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex items-center">
                <h2 className="font-semibold text-gray-800">Sales Over Time (all stores)</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <LineChart data={chartData} width={595} height={248} />
        </div>
    )
}

export default SaleReport
