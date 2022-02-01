import React from 'react'

function Loader() {
    return (
        <div>
            <div className="border-0 shadow rounded-md p-4 w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-12">
                {/* First Card */}
                <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div className="animate-pulse relative shadow-lg rounded-md p-5 border-0">
                        <div className="flex">
                            <div  className="w-10 h-10 inline-block bg-slate-200 rounded-full"></div>
                            <div className="ml-auto">
                                <div className="bg-slate-200 rounded-full w-12 h-3"></div>
                            </div>
                        </div>
                        <div className="mt-6 bg-slate-200 rounded w-full h-2"></div>
                        <div className="bg-slate-200 rounded mt-1 w-full h-2"></div>
                    </div>
                </div>
                {/* 2nd Card */}
                <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div className="animate-pulse relative shadow-lg rounded-md p-5 border-0">
                        <div className="flex">
                            <div  className="w-10 h-10 inline-block bg-slate-200 rounded-full"></div>
                            <div className="ml-auto">
                                <div className="bg-slate-200 rounded-full w-12 h-3"></div>
                            </div>
                        </div>
                        <div className="mt-6 bg-slate-200 rounded w-full h-2"></div>
                        <div className="bg-slate-200 rounded mt-1 w-full h-2"></div>
                    </div>
                </div>
                {/* 3rd Card */}
                <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div className="animate-pulse relative shadow-lg rounded-md p-5 border-0">
                        <div className="flex">
                            <div  className="w-10 h-10 inline-block bg-slate-200 rounded-full"></div>
                            <div className="ml-auto">
                                <div className="bg-slate-200 rounded-full w-12 h-3"></div>
                            </div>
                        </div>
                        <div className="mt-6 bg-slate-200 rounded w-full h-2"></div>
                        <div className="bg-slate-200 rounded mt-1 w-full h-2"></div>
                    </div>
                </div>
                {/* 4th Card */}
                <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                    <div className="animate-pulse relative shadow-lg rounded-md p-5 border-0">
                        <div className="flex">
                            <div  className="w-10 h-10 inline-block bg-slate-200 rounded-full"></div>
                            <div className="ml-auto">
                                <div className="bg-slate-200 rounded-full w-12 h-3"></div>
                            </div>
                        </div>
                        <div className="mt-6 bg-slate-200 rounded w-full h-2"></div>
                        <div className="bg-slate-200 rounded mt-1 w-full h-2"></div>
                    </div>
                </div>

                <div className=" animate-pulseflex flex-col col-span-full xl:col-span-12 shadow-lg rounded-sm border-0 p-16">
                    <div className="mt-2 bg-slate-200 rounded h-2 w-40"></div>
                    <div className="mt-2 bg-slate-200 rounded h-2 w-40"></div>
                    <div className="mt-5 bg-slate-200 rounded w-full h-2"></div>
                    <div className="bg-slate-200 rounded mt-2 w-full h-2"></div>
                    <div className="mt-6 bg-slate-200 rounded w-full h-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
