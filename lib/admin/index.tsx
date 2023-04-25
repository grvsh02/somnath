import React, {useContext} from "react";
import {Card, Typography, IconButton} from "@material-tailwind/react";
import {AuthContext} from "@/lib/common/context/auth.context";
import {AttendanceChart} from "@/lib/admin/components/attendanceChart";
import LatestAttendance from "@/lib/admin/components/latestAttendance";
import {LocationChart} from "@/lib/admin/components/locationChart";


const AdminDashBoard = () => {

    const { profile } = useContext(AuthContext);

    return (
        <div className="w-full">
            <div className="text-5xl text-slate-800 font-extralight dark:text-slate-50">
                Welcome, <span className="font-semibold text-indigo-500">{profile?.first_name || profile?.username || ""}</span>
            </div>
            <div className="pt-4 flex flex-row items-center gap-2">
                <div className="text-base text-slate-400 font-extralight dark:text-slate-300">
                    Here is an overview of your workspace
                </div>
            </div>
            <div className="flex mt-8">
                <div className="w-3/5 h-full">
                    <div className="flex w-full ">
                        <div className="relative flex w-1/2 mr-2 flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">Employees </p>
                                            <h5 className="mb-0 font-bold">
                                                1,000
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <IconButton size="lg" variant="gradient" color="indigo">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                            </svg>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex w-1/2 ml-2 flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">Present</p>
                                            <h5 className="mb-0 font-bold">
                                                700
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <IconButton size="lg" variant="gradient" color="indigo">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                                            </svg>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="relative flex w-1/2 mr-2 flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">Absent</p>
                                            <h5 className="mb-0 font-bold">
                                                300
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <IconButton size="lg" variant="gradient" color="indigo">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M10.375 2.25a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25zM10.375 12a7.125 7.125 0 00-7.124 7.247.75.75 0 00.363.63 13.067 13.067 0 006.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 00.364-.63l.001-.12v-.002A7.125 7.125 0 0010.375 12zM16 9.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z" />
                                            </svg>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex w-1/2 ml-2 flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">Latecomers</p>
                                            <h5 className="mb-0 font-bold">
                                                100
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <IconButton size="lg" variant="gradient" color="indigo">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                            </svg>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Card className="px-4 py-6 h-3/5 w-full flex justify-center items-center">
                        <div className="mb-2 font-semibold text-2xl text-black">
                            Attendance Overview
                        </div>
                        <AttendanceChart />
                    </Card>
                </div>
                <div className="flex flex-col w-1/3 ml-6">
                    <Card className="p-6 w-full">
                        <div className="mb-4 font-semibold text-2xl text-black">
                            Location Overview
                        </div>
                        <LocationChart/>
                    </Card>
                    <Card className="p-6 mt-4">
                        <div className="mb-4 font-semibold text-2xl text-black">
                            Latest Attendance
                        </div>
                        <LatestAttendance />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AdminDashBoard;