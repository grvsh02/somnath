import React, {useContext, useEffect, useState} from 'react';
import WelcomeBanner from "@/lib/dashboard/components/welcomeBanner";
import ApplicantsInfo from "@/lib/dashboard/components/applicantsInfo";
import {Card, CardBody} from "@material-tailwind/react";
import {AuthContext} from "@/lib/common/context/auth.context";
import {ApiService} from "@/lib/common/services/api.services";

const Dashboard = () => {

    const { profile } = useContext(AuthContext);
    const [profileState, setProfileState] = useState({});

    console.log("Dashboard", profile);

    useEffect(() => {
        const getProfile = async () => {
            const response = await ApiService.get("http://127.0.0.1:8000/api/me/profile/get/");
            console.log(response);
            // @ts-ignore
            setProfileState({...profile, ...response?.data.data})
        }
        getProfile();
    }, [])


    return (
        <div className="w-full">
            <div className="my-3">
                <WelcomeBanner name={profile?.first_name} />
            </div>
            <div className="flex">
                <div className="w- pr-2">
                    <div className="flex justify-between mb-9">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 pr-28 pl-8">
                            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total clients</p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">6389</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 pr-24 pl-8">
                            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total clients</p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">6389</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 pr-24 pl-8">
                            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total clients</p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">6389</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 pr-24 pl-8">
                            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total clients</p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">6389</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 h-full pl-2 pr-14">
                    <Card>
                        <CardBody>
                            <ApplicantsInfo profile={profileState}/>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;