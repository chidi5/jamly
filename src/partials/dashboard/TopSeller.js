import React from 'react'
import { Link } from 'react-router-dom';
import Boot from '../../static/images/boot.jpg';

function TopSeller() {
    return (
        <div class="col-span-12 xl:col-span-4">
            <div class="flex items-center h-10">
                <h2 class="text-lg font-medium truncate"> Weekly Best Sellers </h2>
            </div>
            {/*1*/}
            <div class="intro-y px-4 py-4 mb-3 flex items-center relative shadow-md bg-white rounded-md border-transparent">
                <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Icewall Tailwind HTML Admin Template" src={Boot} />
                </div>
                <div class="ml-4 mr-auto">
                    <div class="font-medium">Chelsea Boot</div>
                    <div class="text-gray-600 text-xs mt-0.5">08 Jan, 2022</div>
                </div>
                <div class="py-1 px-2 rounded-full text-xs bg-green-500 text-white cursor-pointer font-medium"> 137 Sales </div>
            </div>
            {/*2*/}
            <div class="intro-y px-4 py-4 mb-3 flex items-center relative shadow-md bg-white rounded-md border-transparent">
                <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Icewall Tailwind HTML Admin Template" src={Boot} />
                </div>
                <div class="ml-4 mr-auto">
                    <div class="font-medium">Chelsea Boot</div>
                    <div class="text-gray-600 text-xs mt-0.5">08 Jan, 2022</div>
                </div>
                <div class="py-1 px-2 rounded-full text-xs bg-green-500 text-white cursor-pointer font-medium"> 137 Sales </div>
            </div>
            {/*3*/}
            <div class="intro-y px-4 py-4 mb-3 flex items-center relative shadow-md bg-white rounded-md border-transparent">
                <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Icewall Tailwind HTML Admin Template" src={Boot} />
                </div>
                <div class="ml-4 mr-auto">
                    <div class="font-medium">Chelsea Boot</div>
                    <div class="text-gray-600 text-xs mt-0.5">08 Jan, 2022</div>
                </div>
                <div class="py-1 px-2 rounded-full text-xs bg-green-500 text-white cursor-pointer font-medium"> 137 Sales </div>
            </div>
            {/*4*/}
            <div class="intro-y px-4 py-4 mb-3 flex items-center relative shadow-md bg-white rounded-md border-transparent">
                <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                    <img alt="Icewall Tailwind HTML Admin Template" src={Boot} />
                </div>
                <div class="ml-4 mr-auto">
                    <div class="font-medium">Chelsea Boot</div>
                    <div class="text-gray-600 text-xs mt-0.5">08 Jan, 2022</div>
                </div>
                <div class="py-1 px-2 rounded-full text-xs bg-green-500 text-white cursor-pointer font-medium"> 137 Sales </div>
            </div>
            <Link to="/" class="w-full block text-center rounded-md py-4 border border-dotted border-gray-400 dark:border-dark-5 text-theme-16 dark:text-gray-600">
                View More
            </Link>
        </div>
    )
}

export default TopSeller
